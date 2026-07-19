import { Request, Response } from "express";
import { registerService, loginService } from "../services/auth.service";
import { AuthRequest } from "../types/auth.types";

// ======================
// Register Controller
// ======================
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const result = await registerService(name, email, password);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

// ======================
// Login Controller
// ======================
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await loginService(email, password);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

// ======================
// Get Current User
// ======================
export const getMe = async (req: AuthRequest, res: Response) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
};
