import dotenv from "dotenv";
import { logger } from "@utils/logger";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`
}); // development default

logger.info(`USING ENVIRONMENT: ${process.env.NODE_ENV}`);
