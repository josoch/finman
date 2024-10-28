export function calculateNetProfit(revenue: number, expenses: number): number {
    return revenue - expenses
  }
  
  export function calculateDebtToEquityRatio(totalLiabilities: number, totalEquity: number): number {
    return totalLiabilities / totalEquity
  }
  
  export function provideInsights(financialData: FinancialData): string[] {
    const insights: string[] = []
  
    if (financialData.netProfit > 0) {
      insights.push('Your business is profitable. Consider reinvesting in growth opportunities.')
    } else {
      insights.push('Your business is currently operating at a loss. Review expenses and consider cost-cutting measures.')
    }
  
    if (financialData.debtToEquityRatio > 2) {
      insights.push('Your debt-to-equity ratio is high. Consider reducing debt or increasing equity to improve financial health.')
    }
  
    return insights
  }
  
  // You'll need to define this interface
  interface FinancialData {
    netProfit: number
    debtToEquityRatio: number
    // Add other necessary properties
  }