// Naming Variables

// El nombre de una variable debe ser descriptivo y claro
// Pero un nombre significativo debe de responder a las siguientes preguntas:

import { Payment } from "../interfaces/payment"

// 1. ¿Por que existe?
// 2. ¿Que hace?
// 3. ¿Como se usa?

// Examples:

export const contractFinalizationDate: Date = new Date('12/12/2025')
export const isGuaranteeValid: boolean = true
export const userStatus: string = 'active'
export const currentWalletBalance: number = 1000
export const userHistoryPayments: Payment[] = [
  {
    id: '1',
    amount: 100,
    currency: 'USD',
    date: new Date(),
    status: 'completed',
    method: 'credit_card'
  },
  {
    id: '2',
    amount: 200,
    currency: 'USD',
    date: new Date(),
    status: 'pending',
    method: 'paypal'
  }
]

