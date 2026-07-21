import { Response } from "express";
import { AuthRequest } from "../types/auth.types";
import { getDashboardStatsService } from "../services/dashboard.service";

export const getDashboardStats = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    const result = await getDashboardStatsService(userId);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
