# Twitter-analysis-backend
Twitter analysis built using N-Tier architecture 

# Project Overview
This backend project is built using a Node.js/Express application with TypeScript. It includes development tools like Nodemon for auto-reloading during development and Docker for containerized deployment. Additionally, it integrates Swagger for API documentation.

## Prerequisites

Before you begin testing, ensure you have met the following requirements:

- Node.js and npm installed locally
- Docker installed (for containerized deployment)
- PostgreSQL database installed
- Make installed
- Basic knowledge of TypeScript, Node.js, and Express

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nkbtemmy/Twitter-analysis.git
   cd Twitter-analysis-backend
   ```

## Install Dependencies:

`npm install`

## Run the Application (Local Development):

- npm run `dev` from development or
- npm run `ts:dev` and 
- npm run `start` for production while did npm run `build`

## Build and Run in Docker (Production):

- Run `npm run build` (on the local machine)
- Run `Make build` (to run it in docker)


## API Documentation (Swagger):
When the server is up and running open your browser and navigate to http://localhost:3000/api-docs to access the Swagger documentation for your API.

## Project Structure

- `src/` - Contains my TypeScript source code.
- `build/` - Compiled TypeScript code (generated when building).
- `src/app/docs/` - Swagger documentation files.

## Tech Stack

**Server:** Node, Express, Typescript, docker, docker-compose
**Database:** PostgreSQL, Sequelizer ORM 

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Configuration

Environment variables and configuration settings can be managed in `.env` or `.env.example`.

## Deployment

This app will be deployed on the OnRender server.
