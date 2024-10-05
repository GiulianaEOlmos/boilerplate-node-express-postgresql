# Boilerplate Typescript, Node.js, Express, and PostgreSQL

This project is a basic template designed for interview purposes. It is built with TypeScript, Node.js, Express, and PostgreSQL, all containerized using Docker. This boilerplate provides a solid foundation for a web application, allowing you to focus on implementing business logic without worrying about the initial setup.

## Getting Started

Follow these steps to set up the project on your local machine for development and testing.

### Prerequisites

Make sure you have the following installed:

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

Using Docker Compose will spin up both the server and the PostgreSQL database locally, allowing you to test and develop in an isolated environment.

1. **Build the Docker containers**:

   ```sh
   docker-compose build
   ```

2. **Start the containers:**:

   ```sh
   docker-compose up
   ```

### Stopping Docker Compose:

a. **Stop the containers but keep the data intact:**:

```sh
docker-compose down
```

b. **Stop the containers and remove the data:**:
This action will remove all the data you've added to the database. If you want to keep working with the same data, do not delete the volume. Alternatively, you should ensure the data is re-added by including it in the initial script that runs when the database starts (these scripts are located in the `sql` folder).

```sh
docker-compose down -v
```

### Running Tests

This project includes a basic test setup with Jest. Follow these steps to run the tests:

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
  - `GET /users`: Retrieve all users
  - `POST /usersTransaction`: Add users as a transaction (an example of how to implement transactions if needed)

### BLOG

If you're interested in learning more about how I built this boilerplate, check out my blog post where I explain the process step-by-step:

### READMEforProject

If you're using this boilerplate as a starting point, I encourage you to create your own version that suits your specific needs. You can adapt this README.md template for your project to provide detailed instructions to your users.
