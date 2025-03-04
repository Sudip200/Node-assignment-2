
# User Management System

A simple User Management System built with Node.js and Express.js that allows users to register, view, update, and manage their data. The system uses a JSON file for data storage and follows the Model-View-Controller (MVC) architecture for structure.

## Features
- User registration with validation (first name and last name).
- Prevents duplicate users from being added.
- View list of all registered users.
- Serve static files for a basic UI.
- Error handling for invalid routes (404).


## Requirements
- Node.js
- Express.js
- Nodemon

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sudip200/Node-assignment-2
   cd Node-assignment-2
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`.

## Routes
- **Home** (`/`): Welcome page.
- **Create User** (`/create`): Form to create a new user.
- **Add User** (`/add-user`): Submits the user data and adds it to the system.
- **User List** (`/users`): Displays all registered users.
- **404 Error**: Displays a 404 page for non-existent routes.

## Notes
- User data is stored in a JSON file located in the `data` folder.
- Form validation ensures only alphabetic characters are used for names.
- Static files (CSS) are served from the `/public` folder.
