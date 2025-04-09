
// Prefer declarative programming over imperative programming

import { Product } from "../interfaces/product"

// La programación declarativa es un paradigma de programación que se centra en el qué hacer en lugar del cómo hacerlo. En lugar de describir los pasos necesarios para lograr un resultado, se describe el resultado deseado y se deja que el sistema determine cómo lograrlo.

// Example

// Bad ❌
const salaries = [ 2000, 2200, 4000, 2000, 1000 ]
let total = 0

for (let i = 0; i < salaries.length; i++) {
  total += salaries[i]
}
console.log(total)

// Good ✅
const employeeSalaries = [ 2000, 2200, 4000, 2000, 1000 ]
const totalPayroll = employeeSalaries.reduce((acc, salary) => acc + salary, 0)
console.log(totalPayroll)

// Debido a que la programación declarative y funciona puede ser algo más dificil de entender, se recomienda no usar abreviaciones

// Bad ❌
const annualSalary = employeeSalaries.reduce((a, s) => a + (s * 12), 0)
console.log(annualSalary)

// Good ✅
const totalPaymentsPerYear = 12
const expectedAnnualSalary = employeeSalaries.reduce((acc, salary) => acc + (salary * totalPaymentsPerYear), 0)
console.log(expectedAnnualSalary)

// Example with forEach
// Bad ❌
const products: Product[] = []

products.forEach((p) => {
  if( p.tags ) {
    if (p.tags.includes('bestseller')) {
      // do something with the product
    }
  }
})

// Good ✅
products.forEach((product) => {
  if (product.tags?.includes('bestseller')) {
    // do something with the product
  }
})
