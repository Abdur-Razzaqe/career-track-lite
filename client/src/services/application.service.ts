import api from "./api";

export const getApplications = async (
  search = "",
  status = "",
  source = "",
  sort = "newest",
  page = 1,
  limit = 10,
) => {
  const response = await api.get("/applications", {
    params: {
      search,
      status,
      source,
      sort,
      page,
      limit,
    },
  });

  return response.data;
};

export const getApplication = async (id: string) => {
  const response = await api.get(`/applications/${id}`);
  return response.data;
};

export const createApplication = async (data: any) => {
  const response = await api.post("/applications", data);
  return response.data;
};

export const updateApplication = async (id: string, data: any) => {
  const response = await api.patch(`/applications/${id}`, data);
  return response.data;
};

export const deleteApplication = async (id: string) => {
  const response = await api.delete(`/applications/${id}`);
  return response.data;
};
