import api from "./api";

export const getDashboardStatsService = async () => {
  const response = await api.get("/dashboard/stats");
  return response.data;
};
