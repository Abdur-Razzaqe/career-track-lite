import { Response } from "express";
import { AuthRequest } from "../types/auth.types";
export declare const createApplication: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMyApplications: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getApplicationById: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateApplication: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteApplication: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=application.controller.d.ts.map