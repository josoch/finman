'use client'

import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { fetchFinancialStatements } from '../lib/api'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function Dashboard() {
  const [financialData, setFinancialData] = useState(null)

  useEffect(() => {
    async function loadFinancialData() {
      const data = await fetchFinancialStatements()
      setFinancialData(data)
    }
    loadFinancialData()
  }, [])

  if (!financialData) return <div>Loading...</div>

  const chartData = {
    labels: financialData.labels,
    datasets: [
      {
        label: 'Revenue',
        data: financialData.revenue,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <div>
        <h2>Net Profit</h2>
        <p>${financialData.netProfit}</p>
      </div>
      <div>
        <h2>Revenue Over Time</h2>
        <Line data={chartData} />
      </div>
    </div>
  )
}