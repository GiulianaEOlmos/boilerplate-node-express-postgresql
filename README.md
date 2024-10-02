# Boilerplate Typescript, Node.js, Express, and PostgreSQL

This project is a basic template designed for interview purposes. It is built with TypeScript, Node.js, Express, and PostgreSQL, all containerized using Docker. This boilerplate provides a solid foundation for a web application, allowing you to focus on implementing business logic without worrying about the initial setup.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/get-started)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/GiulianaEOlmos/boilerplate-node-express-postgresql.git
   cd boilerplate-node-express-postgresql
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

### Down Docker compose

a. **Simple Down**:

```sh
docker-compose down
```

b. **Down the docker compose AND delete the volume**:
This action will remove all the data you've added to the database. If you want to keep working with the same data, do not delete the volume. Alternatively, you should ensure the data is re-added by including it in the initial script that runs when the database starts (these scripts are located in the `sql` folder).

```sh
docker-compose down -v
```

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
npm run test
```

### Endpoints

- **API Endpoints**:
  - `POST /users`: Create a new user
  - `GET /users/:id`: Retrieve a user by ID
  - `PUT /users/:id`: Update a user by ID
  - `DELETE /users/:id`: Delete a user by ID
  - `GET /users`: Get all the users
  - `POST /usersTransaction`: Add users as transaction => An example to implement transactions if are needed.

### BLOG

I write about the process to create this boilerplate in this post:

### READMEforProject

The template for the readme that your project should use.
