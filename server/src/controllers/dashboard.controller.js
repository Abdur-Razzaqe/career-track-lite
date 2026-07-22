import { Response } from "express";
import { AuthRequest } from "../types/auth.types";
import { getDashboardStatsService } from "../services/dashboard.service";
export const getDashboardStats = async (req, res) => {
    try {
        const userId = req.user.userId;
        const result = await getDashboardStatsService(userId);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
        });
    }
};
//# sourceMappingURL=dashboard.controller.js.map