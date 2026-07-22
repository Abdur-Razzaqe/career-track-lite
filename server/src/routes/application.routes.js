import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createApplication, getMyApplications, getApplicationById, updateApplication, deleteApplication, } from "../controllers/application.controller";
const router = Router();
router.post("/", authMiddleware, createApplication);
router.get("/", authMiddleware, getMyApplications);
router.get("/:id", authMiddleware, getApplicationById);
router.patch("/:id", authMiddleware, updateApplication);
router.delete("/:id", authMiddleware, deleteApplication);
export default router;
//# sourceMappingURL=application.routes.js.map