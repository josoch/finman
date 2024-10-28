// frontend/lib/authMiddleware.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from './auth'

export function authMiddleware(handler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(401).json({ error: 'Authentication required' })
    }

    try {
      const decodedToken = await verifyToken(token)
      req.user = decodedToken
      return handler(req, res)
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' })
    }
  }
}