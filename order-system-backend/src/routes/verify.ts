import express, { Request, Response, NextFunction } from 'express';
import verifyToken from '../middleware/authMiddleware';

const router = express.Router();

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Protected route
router.get(
  '/',
  verifyToken,
  asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Protected route accessed' });
  })
);

export default router;
