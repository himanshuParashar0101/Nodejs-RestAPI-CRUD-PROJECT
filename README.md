# CRUD Operations with Node.js and Express.js

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application using Node.js, Express.js, PostgreSQL, and Faker.js for generating random user data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

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
   
   nodemon index.js
   
# API Endpoints

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





