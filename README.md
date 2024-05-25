# AntStone Projecto - DSI 
This is the backend server of the AntStone Construction company api rest services.

## Pull the github repository
```bash
    git clone https://github.com/antstone-projecto/backend.git
```

## Create the Python virtual environment 
```bash
   python -m venv /path/to/new/virtual/environment
```

## Active the Virtual Environment
```bash
    /path/to/new/virtual/environment/Scripts/activate
```

## Install the dependencies
```bash
    pip install -r requirements.txt
```

## Go to the projecto root folder and launch the server
```bash
    cd /go/to/root/project
    python manage.py runserver
```

## For specific port number 
```bash
    cd /go/to/root/project
    python manage.py runserver 0.0.0.0:8000
```

## For urls for api documentation, with the web server running, go to:
  - [Swagger UI](http://localhost:8000/swagger/)
  - [ReDoc UI](http://localhost:8000/redoc/)
  - [Swagger JSON](http://localhost:8000/swagger.json)
  - [Swagger YAML](http://localhost:8000/swagger.yaml)
    