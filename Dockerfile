FROM alpine:3.8

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache git libxml2 libxslt-dev gcc python3-dev musl-dev libffi-dev libmagic
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Preparations for ccf
RUN mkdir /ccf
ADD . /ccf
WORKDIR /ccf

# Add dependencies
RUN pip3 install --no-cache --upgrade -r requirements_unix.txt

# run ccf
ENTRYPOINT pip3 install -r requirements_unix.txt; if [ ! -e "./configuration/database.sqlite3" ]; then echo 'DELETE_ALL' | python3 new_initiation.py; fi && python3 run.py