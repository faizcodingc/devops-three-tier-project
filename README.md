# Dockerized Full-Stack DevOps Application

A production-style full-stack application demonstrating containerization, 
reverse proxying, database persistence, Docker networking, and CI/CD automation.

The application consists of a React frontend, Node.js/Express backend, 
MySQL database, and Nginx reverse proxy, all orchestrated using Docker Compose.

## Tech Stack

- React
- Node.js & Express
- MySQL 8.0
- Nginx
- Docker & Docker Compose
- GitHub Actions
- Docker Hub

## Architecture

Browser
   ↓
Nginx Reverse Proxy (:80)
   ├──→ React Frontend (:80)
   └──→ Node.js Backend (:5000)
              ↓
          MySQL (:3306)
              ↓
       Persistent Volume

 ## Project Structure
       
devopsci-cd/
├── frontend/
├── backend/
├── nginx/
├── docker-compose.yml
├── healthcheck.sh
└── .gitignore

## How It Works

1. User accesses the application through Nginx.
2. Nginx serves the React frontend and forwards `/api` requests to the backend.
3. Node.js/Express processes API requests and communicates with MySQL.
4. MySQL stores application data in a persistent Docker volume.
5. Docker Compose manages all services and their networking.

## Docker Implementation

- Containerized frontend, backend, and MySQL services using Docker Compose.
- Used a multi-stage Docker build for the React frontend.
- Configured a custom Docker network for service-to-service communication.
- Added MySQL healthcheck with `depends_on` to handle database readiness.
- Used a named Docker volume to persist MySQL data.
