/**
 * This file contains all the general utilities that will be used on various
 * files.
 */
import { Request, Response, NextFunction } from "express";

/**
 * @param fn
 * @description a function that wraps async/await error
 * @returns function
 */

export function wrapper(fn: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

/**
 * A Custom Error class.
 */
export class CustomError extends Error {
  status: number;
  field?: string;
  constructor(message: string, status: number, field?: string) {
    super();
    this.field = field || "";
    this.status = status;
    this.message = message;
  }
}

// Cross Origin Resource Options
export const CORS_Options = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
