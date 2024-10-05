import { Request, Response } from "express";
import pool from "../db";
import { QueryResult } from "pg";

// https://node-postgres.com/features/queries
class UserController {
  public async getIndex(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool.query("SELECT * FROM users");

      console.log({ result: JSON.stringify(result) });

      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email } = req.body;
      const result = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2)",
        [name, email]
      );

      console.log({ result: JSON.stringify(result) });

      res
        .status(200)
        .json({ message: "User added successfully", user: result.rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const result = await pool.query("SELECT * FROM users WHERE id = $1", [
        id,
      ]);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const { email } = req.body;
      const result = await pool.query(
        "UPDATE users SET email = $1 WHERE id = $2",
        [email, id]
      );
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: (error as Error).message });
    }
  }

  //https://node-postgres.com/features/transactions
  public async createUserTransaction(
    req: Request,
    res: Response
  ): Promise<void> {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      const users = req.body.users;
      const promises: Promise<QueryResult<any>>[] = [];
      for (const user of users) {
        const { name, email } = user;
        promises.push(
          client.query("INSERT INTO users (name, email) VALUES ($1, $2)", [
            name,
            email,
          ])
        );
      }

      await Promise.all(promises);

      await client.query("COMMIT");
      res.status(200).json({ message: "Users added successfully" });
    } catch (error) {
      console.error(error);
      await client.query("ROLLBACK");
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default UserController;
