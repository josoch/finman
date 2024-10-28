// app/page.tsx
import { Dashboard } from '../components/Dashboard'

export default function Home() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Financial Management Dashboard</h1>
      <Dashboard />
    </div>
  )
}