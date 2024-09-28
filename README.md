# CRUD Operations with Node.js and Express.js

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application using Node.js, Express.js, PostgreSQL, and Faker.js for generating random user data.

## Table of Contents

- [Project Structure](#Project-Stucture)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Overview](#api-Overview)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)


## Project Structure

- `index.js`            # Entry point for the application
- `/views`              # EJS templates for rendering HTML
- `/public`             # Static files (CSS, JS, images)
- `/routes`             # Express routes for handling CRUD operations
- `/controllers`        # Controller functions for handling business logic
- `/models`             # Database models and queries
- `/middlewares`        # Custom middleware for request validation, etc.

## Features

- Create new users with randomly generated data
- Read user data with pagination
- Update existing user information
- Delete users by ID
- Secure against SQL injection
- Efficient database queries with connection pooling

## Technologies Used

- Node.js
- Express.js
- Mysql
- Faker.js
- UUID
- EJS
  
## Installation

1. Clone the repository:

   ```bash
   https://github.com/himanshuParashar0101/Nodejs-RestAPI-CRUD-PROJECT.git
2. Install dependencies:
   
   ```bash
   npm install
   
3. Run the applciaiton :

   ```bash
   npm index.js
   OR
   
   nodemon index.js
   
# API Overview

### Usage
Once the application is running, you can interact with the API using tools like Postman or cURL.

### Endpoints Overview
| **Method** | **Endpoint**    | **Description**                  |
|------------|-----------------|----------------------------------|
| POST       | `/users/new`    | Create a new user                |
| GET        | `/users`        | Retrieve all users (paginated)   |
| GET        | `/users/:id`    | Retrieve a user by ID            |
| PATCH      | `/users/:id`    | Update a user by ID              |
| DELETE     | `/users/:id`    | Delete a user by ID              |

## Database Schema

The `users` table has the following structure:

| **Field**   | **Type**        | **Description**               |
|-------------|-----------------|-------------------------------|
| `id`        | `UUID`          | Unique identifier for each user|
| `username`  | `VARCHAR(255)`  | Username of the user           |
| `email`     | `VARCHAR(255)`  | Email address of the user      |
| `password`  | `VARCHAR(255)`  | Password of the user (hashed)  |


## Environment Variables

Make sure to set up the following environment variables in a `.env` OR index.js  file:

| **Variable**    | **Description**                    |
|-----------------|------------------------------------|
| `DB_HOST`       | The database host                  |
| `DB_USER`       | The database user                  |
| `DB_PASSWORD`   | The database password              |
| `DB_NAME`       | The database name                  |
| `PORT`          | The port on which the app runs     |

## Security

- **SQL Injection Prevention**: All database queries use parameterized queries to avoid SQL injection.
- **Password Storage**: User passwords are stored securely using hashing.

## Future Improvements

- Add user authentication and JWT-based session management.
- Implement pagination and sorting for user data.
- Add input validation using libraries like `express-validator`.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

## Contact

For questions or inquiries, reach out to me at:

- **Email**: [himanshu007parashar@gmail.com]
- **GitHub**: [https://github.com/himanshuParashar0101](https://github.com/himanshuParashar0101)




