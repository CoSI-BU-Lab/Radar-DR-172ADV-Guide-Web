# Radar-DR-172ADV-Guide-Web

This project consists of two parts:
1. **Express.js API (Backend)** - Manages API data and serves information.
2. **Next.js App (Frontend)** - Displays the web application interface.

## Setup

### Backend Setup: Express.js API
1. Create a folder for the backend:
    ```bash
    mkdir expressjs-ts
    cd expressjs-ts/
    ```
2. Initialize the project and install dependencies:
    ```bash
    npm init -y
    npm install express @types/express
    npm install --save-dev typescript ts-node ts-node-dev
    ```
3. Create a TypeScript configuration file (`tsconfig.json`):
    ```bash
    npx tsc --init
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup: Next.js App
1. Create a new Next.js application:
    ```bash
    npx create-next-app@latest my-app
    cd my-app/
    ```
2. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Running the Application

To run both the backend and frontend:

1. **Run the backend server first**:
    ```bash
    cd expressjs-ts/
    npm start
    ```
2. **Then, run the frontend server**:
    ```bash
    cd my-app/
    npm run dev
    ```
