import { Response } from "express";
import { AuthRequest } from "../types/auth.types";
import {
  createApplicationService,
  getMyApplicationsService,
  updateApplicationService,
  deleteApplicationService,
  getApplicationByIdService,
} from "../services/application.service";

// Create Application

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

// Get All Applications

export const getMyApplications = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    const result = await getMyApplicationsService(userId, req.query);

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

// Get Single Application

export const getApplicationById = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const applicationId = req.params.id;

    const result = await getApplicationByIdService(
      applicationId as string,
      userId,
    );

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

// Update Application

export const updateApplication = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const applicationId = req.params.id;

    // এখানে সার্ভিস ফাংশনের সিগনেচার অনুযায়ী সঠিক আর্গুমেন্ট পাস করা হয়েছে
    const result = await updateApplicationService(
      applicationId as string,
      userId,
      req.body,
    );

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

// Delete Application

export const deleteApplication = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const applicationId = req.params.id;

    const result = await deleteApplicationService(
      applicationId as string,
      userId,
    );

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
