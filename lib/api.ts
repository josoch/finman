// lib/api.ts

export async function fetchFinancialStatements() {
    // This is a mock implementation. Replace with actual API call.
    return {
      netProfit: 50000,
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      revenue: [30000, 35000, 40000, 45000, 50000, 55000]
    }
  }