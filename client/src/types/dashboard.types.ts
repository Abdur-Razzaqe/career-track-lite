export interface DashboardData {
  name?: string;

  totalApplications: number;
  applied: number;
  assessment: number;
  interviews: number;
  offers: number;
  rejected: number;

  recentApplications?: any[];
}
