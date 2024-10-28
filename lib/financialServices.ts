import axios from 'axios'

export async function fetchBankTransactions(bankApiKey: string, startDate: string, endDate: string) {
  try {
    const response = await axios.get('https://api.bank.com/transactions', {
      headers: { Authorization: `Bearer ${bankApiKey}` },
      params: { startDate, endDate },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching bank transactions:', error)
    throw error
  }
}