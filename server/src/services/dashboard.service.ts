import prisma from "../config/prisma";

export const getDashboardStatsService = async (userId: string) => {
  const totalApplications = await prisma.application.count({
    where: {
      userId,
    },
  });

  const saved = await prisma.application.count({
    where: {
      userId,
      status: "SAVED",
    },
  });

  const applied = await prisma.application.count({
    where: {
      userId,
      status: "APPLIED",
    },
  });

  const assessment = await prisma.application.count({
    where: {
      userId,
      status: "ASSESSMENT",
    },
  });

  const interview = await prisma.application.count({
    where: {
      userId,
      status: "INTERVIEW",
    },
  });

  const offer = await prisma.application.count({
    where: {
      userId,
      status: "OFFER",
    },
  });

  const rejected = await prisma.application.count({
    where: {
      userId,
      status: "REJECTED",
    },
  });

  const recentApplications = await prisma.application.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return {
    success: true,
    data: {
      totalApplications,
      saved,
      applied,
      assessment,
      interview,
      offer,
      rejected,
      recentApplications,
    },
  };
};
