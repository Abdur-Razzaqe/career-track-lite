export declare const registerService: (name: string, email: string, password: string) => Promise<{
    success: boolean;
    message: string;
    data: {
        id: any;
        name: any;
        email: any;
    };
}>;
export declare const loginService: (email: string, password: string) => Promise<{
    success: boolean;
    message: string;
    token: never;
    data: {
        id: any;
        name: any;
        email: any;
    };
}>;
//# sourceMappingURL=auth.service.d.ts.map