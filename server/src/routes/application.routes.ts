import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createApplication,
  getMyApplications,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/application.controller";

const router = Router();

router.post("/", authMiddleware, createApplication);
router.get("/", authMiddleware, getMyApplications);
router.patch("/:id", authMiddleware, updateApplicationStatus);
router.delete("/:id", authMiddleware, deleteApplication);

export default router;
