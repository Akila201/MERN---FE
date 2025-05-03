# Simple React Blog Frontend

This project is the frontend for a simple blogging application built with React. It allows authenticated users to manage their own blog posts.

## Features

*   **User Authentication:** Login page using email and password (JWT handled via backend).
*   **Post Management:**
    *   Create new blog posts.
    *   View a list of your own posts.
    *   Edit existing posts.
    *   Delete your posts.
*   **Routing:** Uses React Router for page navigation.
*   **API Interaction:** Uses Axios to communicate with a separate backend API.
*   **State Management:** Uses React Hooks (useState, useEffect, useContext) and Context API for managing authentication state (token).
*   **UI:** Basic responsive UI styled with vanilla CSS. Includes loading spinners and error messages.

## Technologies Used

*   React (Functional Components & Hooks)
*   React Router DOM
*   Axios
*   Vanilla CSS

## Prerequisites

*   **Node.js:** Version 18.x or later recommended (check with `node -v`).
*   **npm** (comes with Node.js) or **yarn** (optional, install with `npm install --global yarn`).
*   The corresponding [Backend API](<link-to-your-backend-repo-if-available>) must be running separately.

## Setup and Running

1.  **Clone the repository (optional, if you don't have the code locally):**
    ```bash
    git clone <your-repo-url>
    cd Blog-FE
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variable:**
    Create a `.env` file in the root directory (`/Users/akila/Documents/Akila/Bornov/Blog-FE/.env`) and add the URL of your running backend API:
    ```env
    REACT_APP_API_URL=http://localhost:5001/api
    ```
    *(Replace `http://localhost:5001/api` if your backend runs on a different URL)*

4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will usually open the app in your default browser at `http://localhost:3000`.

5.  **Ensure Backend is Running:** Make sure your separate backend server (Node.js/Express) is running, as this frontend relies on it for all data and authentication.

## Available Scripts

In the project directory, you can run:

*   `npm start` / `yarn start`: Runs the app in development mode.
*   `npm test` / `yarn test`: Launches the test runner.
*   `npm run build` / `yarn build`: Builds the app for production.
*   `npm run eject` / `yarn eject`: Ejects from Create React App configuration (use with caution).