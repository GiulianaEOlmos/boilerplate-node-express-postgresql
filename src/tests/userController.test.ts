import { Request, Response } from "express";
import UserController from "../controllers/userController";
import pool from "../db";

jest.mock("../db");

describe("UserController", () => {
  let userController: UserController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    userController = new UserController();
    req = {};
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    res = {
      status: statusMock,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get all users", async () => {
    const mockUsers = [{ id: 1, name: "John Doe", email: "john@example.com" }];
    (pool.query as jest.Mock).mockResolvedValue({ rows: mockUsers });

    await userController.getIndex(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockUsers);
  });

  it("should create a new user", async () => {
    const mockUser = { id: 1, name: "John Doe", email: "john@example.com" };
    req.body = { name: "John Doe", email: "john@example.com" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockUser] });

    await userController.createUser(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "User added successfully",
      user: mockUser,
    });
  });

  it("should get a user by ID", async () => {
    const mockUser = { id: 1, name: "John Doe", email: "john@example.com" };
    req.params = { id: "1" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockUser] });

    await userController.getUserById(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith([mockUser]);
  });

  it("should update a user", async () => {
    req.params = { id: "1" };
    req.body = { email: "john.new@example.com" };
    (pool.query as jest.Mock).mockResolvedValue({});

    await userController.updateUser(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "User updated successfully",
    });
  });

  it("should delete a user", async () => {
    req.params = { id: "1" };
    (pool.query as jest.Mock).mockResolvedValue({});

    await userController.deleteUser(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "User deleted successfully",
    });
  });
});
