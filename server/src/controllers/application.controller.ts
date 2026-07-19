import { Response } from "express";
import { AuthRequest } from "../types/auth.types";
import {
  createApplicationService,
  getMyApplicationsService,
  updateApplicationStatusService,
  deleteApplicationService,
} from "../services/application.service";

export const createApplication = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    const result = await createApplicationService(userId, req.body);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
export const getMyApplications = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    const result = await getMyApplicationsService(userId);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
export const updateApplicationStatus = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const userId = req.user!.userId;
    const applicationId = req.params.id;
    const { status } = req.body;

    const result = await updateApplicationStatusService(
      applicationId,
      userId,
      status,
    );

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const deleteApplication = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const applicationId = req.params.id;

    const result = await deleteApplicationService(applicationId, userId);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
