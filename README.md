# AntStone Project - DSI  
This is the backend server of the AntStone Construction company api rest services.

## Backend

### Pull the github repository
```bash
    git clone https://github.com/antstone-projecto/backend.git
```

### Create the Python virtual environment 
```bash
   python -m venv /path/to/new/virtual/environment
```

### Active the Virtual Environment
```bash
    /path/to/new/virtual/environment/Scripts/activate
```

### Install the dependencies
```bash
    pip install -r requirements.txt
```

### Go to the project root folder and launch the server
```bash
    cd /go/to/root/project
    python manage.py runserver
```

### For specific port number 
```bash
    cd /go/to/root/project
    python manage.py runserver 0.0.0.0:8000
```

### For urls for api documentation, with the web server running, go to:
  - [Swagger UI](http://localhost:8000/swagger/)
  - [ReDoc UI](http://localhost:8000/redoc/)
  - [Swagger JSON](http://localhost:8000/swagger.json)
  - [Swagger YAML](http://localhost:8000/swagger.yaml)


## Frontend

  The next commands is for the frontend installation for development.

### Pull the repository

```bash
    git pull origin main
```

### Change to the fronted directory

```bash
    cd antstone_frontend
```

### Install the npm dependencies

```bash
    npm install
```

### Run the development server.

```bash
    npm start
```

### Access to the web app from the browser.

  [localhost](http://localhost:3000) 
