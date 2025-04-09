
// Good
export const [dd, mm, yyyy] = new Date().toLocaleDateString('es-MX').split('/')

// Better
export const today = new Date()
export const formattedDate: string = today.toLocaleDateString('es-MX') // 12/12/2020
export const [day, month, year] = formattedDate.split('/')
