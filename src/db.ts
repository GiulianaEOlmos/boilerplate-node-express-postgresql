import { Pool } from "pg";

const pool = new Pool({
  user: "myuser",
  host: "db",
  database: "mydb",
  password: "mypassword",
  port: 5432,
});

export default pool;
