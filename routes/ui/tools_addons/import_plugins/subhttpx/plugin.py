import logging
from flask_wtf import FlaskForm
from wtforms import *
from wtforms.validators import *
from system.db import Database
import logging
from routes.ui import routes
from app import check_session, db, redirect, render_template, request, send_log_data, requires_authorization, csrf, config
import app
from urllib.parse import urlparse
from system.forms import *
import json
import re
from IPy import IP
from xml.dom.minidom import parseString
from shutil import copyfile
import ipaddress
from os import path, remove
from system.crypto_functions import *
from system.security_functions import htmlspecialchars
import json

route_name = "subhttpx"

tools_description = [
    {
        "Icon file": "subfinder.png",
        "Icon URL": "",
        "Official name": "Subfinder",
        "Short name": "subfinder",
        "Description": "Subfinder is a subdomain discovery tool that returns valid subdomains for websites, using passive online sources.",
        "URL": "https://github.com/projectdiscovery/subfinder",
        "Plugin author": "@salihislam"
    }, {
        "Icon file": "httpx.png",
        "Icon URL": "",
        "Official name": "HTTPX",
        "Short name": "httpx",
        "Description": "HTTPX is a fully featured HTTP client for Python 3, which provides sync and async APIs, and support for both HTTP/1.1 and HTTP/2.",
        "URL": "https://github.com/projectdiscovery/httpx",
        "Plugin author": "@salihislam"
    }
]

class ToolArguments(FlaskForm):
    json_files = MultipleFileField(
        label='json_files',
        description="JSON-report",
        default=None,
        validators=[],
        _meta={"display_row": 2, "display_column": 1, "file_extensions": ".json"})
    
    scan_description = StringField(
        label='scan_description',
        description='New scan description',
        default='Added from Subfinder and HTTPX',
        validators=[],
        _meta={"display_row": 2, "display_column": 2}
    )


def process_request(
        current_user: dict,
        current_project: dict,
        db: Database,
        input_dict: object,
        global_config: object
) -> str:
    
    json_files = input_dict["json_files"]

    hostnames_dict = {}
    ports_dict = {}

    for file in input_dict["json_files"]:
        if 1 == 1:
            text_file_data = file.decode("charmap")
            data = text_file_data
            fixed_data = re.sub(r'(\{.*?\})(?=\{)', r'\1,', data.replace("\n", ""))
            fixed_data = f"[{fixed_data}]"

            scan_result = json.loads(fixed_data)
            for hostname_row in scan_result:
                tech_list = ""

                hostname = hostname_row['input'] if 'input' in hostname_row else ''
                hostname_location = hostname_row['location'] if 'location' in hostname_row else ''
                host_ip = hostname_row['a'] if 'a' in hostname_row else ''
                host_ip = host_ip[0]
                host_port = hostname_row['port'] if 'port' in hostname_row else ''
                hostname_webserver = hostname_row['webserver'] if 'webserver' in hostname_row else ''
                hostname_status_code = hostname_row['status_code'] if 'status_code' in hostname_row else ''
                host_tech = hostname_row['tech'] if 'tech' in hostname_row else ''

                for tech in host_tech:
                    if tech == host_tech[-1]:
                        tech_list += tech
                    else:
                        tech_list += tech + ", "
                    

                host_tech = tech_list

                if hostname != '' and host_ip != '':
                    if hostname == '':
                        if hostname not in hostnames_dict:
                            hostnames_dict[hostname] = {
                                'ip': [host_ip],
                                'description': 'Type: {}'.format(hostname)
                            }
                        else:
                            if host_ip not in hostnames_dict[hostname]['ip']:
                                hostnames_dict[hostname]['ip'].append(host_ip)
                    else:
                        if hostname not in hostnames_dict:
                            hostnames_dict[hostname] = {
                                'ip': [host_ip],
                                'description': 'Type: {}'.format(hostname),
                                'technology': '{}'.format(host_tech)
                            }
                elif hostname_location != '' and host_ip == '' and hostname_webserver != '':
                    if hostname_location not in hostnames_dict:
                        hostnames_dict[hostname_location] = {
                            'ip': [],
                            'description': 'Type: {}'.format(hostname_webserver),
                            'technology': '{}'.format(host_tech)
                        }
                    else:
                        hostnames_dict[hostname_location]['description'] += '\nType: {}'.format(hostname_webserver)
                        hostnames_dict[hostname_location]['technology'] += '{}'.format(host_tech)
                            
                elif hostname != '' and host_ip != '' and hostname_location == '':
                    if hostname not in hostnames_dict:
                        hostnames_dict[hostname] = {
                            'ip': [host_ip],
                            'description': 'Type: {}'.format(hostname_webserver),
                            'technology': '{}'.format(host_tech)
                        }
                if host_port != '' and host_ip != '':
                    if host_ip not in ports_dict:
                        ports_dict[host_ip] = [host_port]
                    else:
                        if host_port not in ports_dict[host_ip]:
                            ports_dict[host_ip].append(host_port)


    for hostname in hostnames_dict:
        ip_array = hostnames_dict[hostname]['ip']
        description = hostnames_dict[hostname]['description']
        technology = hostnames_dict[hostname]['technology']
        
        for ip_address in ip_array:
            ip_obj = ipaddress.ip_address(ip_address)
            if (':' not in ip_address) or (':' in ip_address):

                current_host = db.select_project_host_by_ip(current_project['id'], ip_address)
                if not current_host:
                    hosts_description = input_dict['scan_description']
                    host_id = db.insert_host(current_project['id'], ip_address, current_user['id'],
                                             hosts_description)
                else:
                    host_id = current_host[0]['id']

                current_hostname = db.select_ip_hostname(host_id, hostname)
                if not current_hostname:
                    hostname_id = db.insert_hostname(host_id, hostname, description, current_user['id'])
                    technology_id = db.insert_technology(host_id, technology, current_user['id'])

                else:
                    hostname_id = current_hostname[0]['id']
                    technology_id = current_hostname[0]['id']
                    db.update_hostname(hostname_id, description)
                    db.update_technology(technology_id, technology)

    for ip_address in ports_dict:
        ports_arr = set(ports_dict[ip_address])
        ip_obj = ipaddress.ip_address(ip_address)
        if (':' not in ip_address) or (':' in ip_address):
            current_host = db.select_project_host_by_ip(current_project['id'], ip_address)
            if not current_host:
                hosts_description = input_dict['scan_description']
                host_id = db.insert_host(current_project['id'], ip_address, current_user['id'],
                                         hosts_description)
            else:
                host_id = current_host[0]['id']

            for port_num in ports_arr:
                port_num_int = int(port_num)
                if port_num_int > 0 and port_num_int < 65536:
                    current_port = db.select_host_port(host_id, int(port_num), is_tcp=True)
                    if not current_port:
                        port_description = input_dict['scan_description']
                        port_id = db.insert_host_port(host_id, port_num_int, True, 'unknown',
                                                      port_description, current_user['id'],
                                                      current_project['id'])

    if global_config['files']['poc_storage'] == 'database':
        pass

    success = True
    if success:
        return ""
    else:
        logging.error("This string will be in error log")
        return "There were some errors! (user will get this error string)"
