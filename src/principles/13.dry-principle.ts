
// DRY principle (Don't Repeat Yourself)
// El principio DRY (Don't Repeat Yourself) es un principio de programación que dice que la duplicación de código
// debe de ser evitada. En su lugar, se debe de abstraer la lógica repetida en funciones, clases o módulos.
// Esto ayuda a mantener el código limpio, fácil de mantener y menos propenso a errores.

// Bad ❌
const IVA_RATE = 0.16;

export const television45InchesPrice = 6000
export const television50InchesPrice = 7000
export const television55InchesPrice = 8000

// export const television45InchesWithTax = television45InchesPrice + (television45InchesPrice * IVA_RATE)
// export const television50InchesWithTax = television50InchesPrice + (television50InchesPrice * IVA_RATE)
// export const television55InchesWithTax = television55InchesPrice + (television55InchesPrice * IVA_RATE)

// Good ✅
export const calculatePriceWithTax = (price: number): number => price + (price * IVA_RATE)

console.log(calculatePriceWithTax(television45InchesPrice))
console.log(calculatePriceWithTax(television50InchesPrice))
console.log(calculatePriceWithTax(television55InchesPrice))
