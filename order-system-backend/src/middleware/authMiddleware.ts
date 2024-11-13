import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: string;
}

function verifyToken(req: AuthRequest, res: Response, next: NextFunction): void {
  const token = req.header('Authorization');
  if (!token) {
    res.status(401).json({ error: 'Access denied' });
    return;
  }
  try {
    const decoded = jwt.verify(token, 'your-secret-key') as JwtPayload;
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

export default verifyToken;
