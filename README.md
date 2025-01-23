# Sustainability Action Tracker

This project consists of a Node.js backend API and an Angular frontend for tracking sustainability actions.

## Backend Setup
1. Ensure that Node.js is installed on a local machine.

2. Install dependencies at local backend directory:
npm install

3. Start the server:
node index.js

The server will run on `http://localhost:3000`.

## Frontend Setup
1. Ensure that Angular is installed on a frontend directory on a local machine.
  
2. Navigate to the frontend directory (i.e. sustainability-tracker folder) and install dependencies:
npm install

4. Start the Angular development server inside the sustainability-tracker terminal:
ng serve

The application will be available at `http://localhost:4200`.

## Testing API Endpoints

You can use Postman to test the API endpoints:

1. GET all actions: Send a GET request to `http://localhost:3000/api/actions`
2. POST a new action: Send a POST request to `http://localhost:3000/api/actions` with a JSON body

Ensure the server is running before testing the endpoints.
