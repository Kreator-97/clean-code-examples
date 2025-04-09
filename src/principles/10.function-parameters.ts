
// Function parameters

import { Product } from "../interfaces/product"

// Las funciones tiene que contener de forma ideal un solo parámetro.
// 2 parametros son aceptables si son de tipo primitivo y no son objetos.
// Con 3 parametros estan en el limite de ser aceptables.
// Con 4 o mas parametros no son aceptables. 

// Bad ❌
export function calculateTotalPrice(price: number, tax: number, discount: number, shipping: number): number {
  return price + tax - discount + shipping
}

// Good ✅
interface CalculateTotalPriceParams {
  price: number
  tax: number
  discount: number
  shipping: number
}

export function calculateTotalOrderPrice({ discount, price, shipping, tax }: CalculateTotalPriceParams): number {
  return price + tax - discount + shipping
}

// Evita los argumentos de bandera.
// Los argumentos de bandera son argumentos que cambian el comportamiento de una función.
// Esto puede hacer que la función sea difícil de entender y mantener.
// En su lugar, considera dividir la función en dos funciones separadas o usar un objeto de configuración.


// Bad ❌
export async function setProductStatus(id: string, isPublish: true): Promise<void> {
  const response = await fetch(`https://api.example.com/products/${id}`)
  const product = response.json()

  if( !product) {
    throw new Error(`Product with id ${id} not found`)
  }

  const updateResponse = await fetch(`https://api.example.com/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      ...product,
      isActive: isPublish ? 'published' : 'draft'
    })
  })

  if (!updateResponse.ok) {
    throw new Error(`Failed to update product with id ${id}`)
  }

  const updatedProduct = await updateResponse.json()
  console.log(`Product with id ${id} updated successfully`, updatedProduct)
}


// Good ✅
export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`https://api.example.com/products/${id}`)
  
  if (!response.ok) {
    throw new Error(`Product with id ${id} not found`)
  }
  const product: Product = await response.json()
  return product
}

export async function publishProduct(id: string): Promise<void> {
  const product = await getProduct(id)

  const updateResponse = await fetch(`https://api.example.com/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      ...product,
      isActive: 'published'
    })
  })

  if (!updateResponse.ok) {
    throw new Error(`Failed to update product with id ${id}`)
  }

  console.log(`Product with id ${id} updated successfully`)
}

export async function draftProduct(id: string): Promise<void> {
  const product = await getProduct(id)

  const updateResponse = await fetch(`https://api.example.com/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      ...product,
      isActive: 'draft'
    })
  })

  if (!updateResponse.ok) {
    throw new Error(`Failed to update product with id ${id}`)
  }

  console.log(`Product with id ${id} updated successfully`)
}