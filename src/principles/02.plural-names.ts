import { Payment } from "../interfaces/payment"
import { Property } from "../interfaces/property"
import { User } from "../interfaces/user"

// Plural Names
// Avoid innecessary suffixes and prefixes in the plural names

// ❌ Bad example:
export const userArray: Array<User> = []
export const paymentList: Array<Payment> = []
export const propertyCollections: Array<Property> = []

// ✅ Good example:
export const users: Array<User> = []
export const payments: Array<Payment> = []
export const properties: Array<Property> = []

// Give more context to the name
// ⭐ Better example:
export const activeUsers: Array<User> = []
export const pendingPayments: Array<Payment> = []
export const availableProperties: Array<Property> = []


// Avoid implementation details in the name
// ❌ Bad example:
export const allUsersfromDB: Array<User> = []
export const allPaymentsFromAPIService: Array<Payment> = []
export const allPropertiesFromRedisCache: Array<Property> = []


// ✅ Good example:
export const allUsers: Array<User> = []
export const allPayments: Array<Payment> = []
export const allProperties: Array<Property> = []

