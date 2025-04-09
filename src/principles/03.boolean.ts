
// Boolean
// Usa prefijos como "is", "has", "can" para variables.

// Bad ❌
export const open = true
export const write = true
export const payments = true
export const notEmpty = true

// Good ✅
export const isOpen = true
export const canWrite = true
export const hasPendingPayments = true
export const isEmpty = true

export const age = 18
export const isAdult = age >= 18

// También se deben evitar los nombres en negativo
// Bad ❌
export const isEmailNotValid = true
export const isPropertyNotAvailable = true
export const isUserNotFound = true

// Good ✅
export const isEmailValid = false
export const isPropertyAvailable = false
export const isUserFound = false
