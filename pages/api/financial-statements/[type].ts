// frontend/pages/api/financial-statements/[type].ts
import { NextApiRequest, NextApiResponse } from 'next'
import { fetchFinancialData } from '../../lib/strapi'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query
  const { startDate, endDate } = req.body

  try {
    const data = await fetchFinancialData(type as string, startDate, endDate)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching financial data' })
  }
}