import prisma from "../config/prisma";
export const getDashboardStatsService = async (userId) => {
    const [totalApplications, applied, assessment, interviews, offers, rejected, recentApplications,] = await Promise.all([
        prisma.application.count({
            where: { userId },
        }),
        prisma.application.count({
            where: {
                userId,
                status: "APPLIED",
            },
        }),
        prisma.application.count({
            where: {
                userId,
                status: "ASSESSMENT",
            },
        }),
        prisma.application.count({
            where: {
                userId,
                status: "INTERVIEW",
            },
        }),
        prisma.application.count({
            where: {
                userId,
                status: "OFFER",
            },
        }),
        prisma.application.count({
            where: {
                userId,
                status: "REJECTED",
            },
        }),
        prisma.application.findMany({
            where: { userId },
            orderBy: {
                applicationDate: "desc",
            },
            take: 5,
            select: {
                id: true,
                companyName: true,
                jobTitle: true,
                status: true,
                applicationDate: true,
            },
        }),
    ]);
    return {
        success: true,
        data: {
            totalApplications,
            applied,
            assessment,
            interviews,
            offers,
            rejected,
            recentApplications,
        },
    };
};
//# sourceMappingURL=dashboard.service.js.map