
export interface Payment {
  id: string
  amount: number
  currency: string
  date: Date
  status: 'pending' | 'completed' | 'failed'
  method: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer'
}
