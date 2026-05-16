import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    console.log("ERROR:", error.message);

    res.status(error.status || 500).json({

        success: false,

        message:
            error.message || "Internal Server Error",
    });
};