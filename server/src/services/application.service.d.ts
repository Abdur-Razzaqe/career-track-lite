export declare const createApplicationService: (userId: string, data: any) => Promise<{
    success: boolean;
    data: any;
}>;
export declare const getMyApplicationsService: (userId: string, query: any) => Promise<{
    success: boolean;
    pagination: {
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: any;
}>;
export declare const updateApplicationService: (applicationId: string, userId: string, data: any) => Promise<{
    success: boolean;
    message: string;
    data: any;
}>;
export declare const deleteApplicationService: (applicationId: string, userId: string) => Promise<{
    success: boolean;
    message: string;
}>;
export declare const getApplicationByIdService: (applicationId: string, userId: string) => Promise<{
    success: boolean;
    data: any;
}>;
//# sourceMappingURL=application.service.d.ts.map