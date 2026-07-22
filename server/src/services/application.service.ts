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
    data: application,
  };
};

export const getMyApplicationsService = async (userId: string, query: any) => {
  // Get Query Parameters

  const {
    search,
    status,
    source,
    sort = "newest",
    page = "1",
    limit = "10",
  } = query;

  // Pagination

  const currentPage = Number(page);
  const pageSize = Number(limit);

  const skip = (currentPage - 1) * pageSize;

  const where: any = {
    userId,
  };

  if (search) {
    where.OR = [
      {
        companyName: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        jobTitle: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  if (status) {
    where.status = status;
  }

  if (source) {
    where.source = source;
  }

  // Dynamic Sort

  const orderBy = {
    createdAt: sort === "oldest" ? "asc" : "desc",
  } as const;

  // Total Count

  const totalApplications = await prisma.application.count({
    where,
  });

  // Get Applications

  const applications = await prisma.application.findMany({
    where,
    orderBy,
    skip,
    take: pageSize,
  });

  return {
    success: true,
    pagination: {
      total: totalApplications,
      page: currentPage,
      limit: pageSize,
      totalPages: Math.ceil(totalApplications / pageSize),
    },
    data: applications,
  };
};

export const updateApplicationService = async (
  applicationId: string,
  userId: string,
  data: any,
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

  const updatedApplication = await prisma.application.update({
    where: {
      id: applicationId,
    },
    data: {
      companyName: data.companyName,
      jobTitle: data.jobTitle,
      jobUrl: data.jobUrl,
      source: data.source,
      status: data.status,
      applicationDate: new Date(data.applicationDate),
      notes: data.notes,
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
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

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
