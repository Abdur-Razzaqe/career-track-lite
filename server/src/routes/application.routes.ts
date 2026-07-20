import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createApplication,
  getMyApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/application.controller";

const router = Router();

router.post("/", authMiddleware, createApplication);
router.get("/", authMiddleware, getMyApplications);
router.get("/:id", authMiddleware, getApplicationById);
router.patch("/:id", authMiddleware, updateApplicationStatus);
router.delete("/:id", authMiddleware, deleteApplication);

export default router;
