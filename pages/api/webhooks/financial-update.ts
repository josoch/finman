// frontend/pages/api/webhooks/financial-update.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { sendNotification } from '../../lib/notifications'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { event, data } = req.body

  if (event === 'financial_milestone') {
    await sendNotification(data.userId, `Congratulations! You've reached a financial milestone: ${data.message}`)
  }

  res.status(200).end()
}