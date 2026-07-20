import prisma from "../config/prisma";

export const createApplicationService = async (userId: string, data: any) => {
  const application = await prisma.application.create({
    data: {
      companyName: data.companyName,
      jobTitle: data.jobTitle,
      jobUrl: data.jobUrl,
      source: data.source,
      status: data.status,
      applicationDate: new Date(data.applicationDate),
      notes: data.notes,
      userId,
    },
  });

  return {
    success: true,
    message: "Application Created Successfully",
    data: application,
  };
};
export const getMyApplicationsService = async (userId: string) => {
  const applications = await prisma.application.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    success: true,
    count: applications.length,
    data: applications,
  };
};
export const updateApplicationStatusService = async (
  applicationId: string,
  userId: string,
  status: string,
) => {
  // Step 1: Find application
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  // Step 2: Update status
  const updatedApplication = await prisma.application.update({
    where: {
      id: applicationId,
    },
    data: {
      status: status as any,
    },
  });

  return {
    success: true,
    message: "Application Updated Successfully",
    data: updatedApplication,
  };
};
export const deleteApplicationService = async (
  applicationId: string,
  userId: string,
) => {
  // Check ownership
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  // Delete application
  await prisma.application.delete({
    where: {
      id: applicationId,
    },
  });

  return {
    success: true,
    message: "Application Deleted Successfully",
  };
};
export const getApplicationByIdService = async (
  applicationId: string,
  userId: string,
) => {
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  return {
    success: true,
    data: application,
  };
};
