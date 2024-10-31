import runners.fastwsgi_server
from system.config_load import config_dict
from runners import fastwsgi_server, flask_server, waitress_server
from system.db_initiation import create_db
from os import path



print('''
      
      
 ██████╗ █████╗ ██████╗ ████████╗
██╔════╝██╔══██╗██╔══██╗╚══██╔══╝
██║     ███████║██████╔╝   ██║   
██║     ██╔══██║██╔══██╗   ██║   
╚██████╗██║  ██║██║  ██║   ██║   
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                 
      ''')

# Check if the database exists; if not, create it
db_path = 'configuration/database.sqlite3'
if not path.exists(db_path):
    print("Database not found. Creating a new one...")
    create_db()
else:
    print("Database already exists. Skipping creation.")


config = config_dict()
run_func = None
if config['main']['web_engine'] == 'flask':
    run_func = flask_server.start_server
elif config['main']['web_engine'] == 'waitress':
    run_func = waitress_server.start_server
elif config['main']['web_engine'] == 'fastwsgi':
    run_func = fastwsgi_server.start_server
else:
    print("Parameter 'web_engine' was not recognized!")
    exit(-1)

# starting server
run_func()
