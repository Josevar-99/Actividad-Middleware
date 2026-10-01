import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
    
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const hora = new Date().toLocaleDateString();
        console.log(`[${hora}] ${req.method} ${req.originalUrl}`);
        next();
    }
}