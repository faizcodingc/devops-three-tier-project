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
