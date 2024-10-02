## {{Project Title}}

### Introduction

{Introduction about what the project does and what technologies do you use}

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

### Running Docker Compose

This will help us to have our server and database running locally.

1. **Build Docker Compose**:

   ```sh
   docker-compose build
   ```

2. **Start Docker Compose**:

   ```sh
   docker-compose up
   ```

### API

Expose your api. You could also share a postman collection here.

- **API Endpoints**:
  - `POST /users`: Create a new user
  - `GET /users/:id`: Retrieve a user by ID
  - `PUT /users/:id`: Update a user by ID
  - `DELETE /users/:id`: Delete a user by ID
  - `GET /users`: Get all the users
  - `POST /usersTransaction`: Add users as transaction.

### Test

To run the tests for this project, follow these steps:

1. **Install Dependencies:**
   Ensure all dependencies are installed. If you haven't done this yet, run:

```sh
npm install
```

2. **Run Tests:**
   Execute the tests using Jest:

```sh
npm test
```
