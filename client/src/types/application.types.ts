export interface CreateApplicationDto {
  companyName: string;
  jobTitle: string;
  jobUrl?: string;
  source: string;
  status: string;
  applicationDate: string;
  notes?: string;
}

export interface ApplicationQuery {
  search?: string;
  status?: string;
  source?: string;
  sort?: "newest" | "oldest";
  page?: string;
  limit?: string;
}
