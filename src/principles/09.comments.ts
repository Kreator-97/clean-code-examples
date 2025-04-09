
// Comments
// Los comentarios deben de ser evitados en la medida de lo posible. Si el código no es claro, entonces el código
// debe de ser refactorizado. Los comentarios deben de ser usados para explicar el "por que" de una decisión y no el "como"
// se hace.

import { Author } from "../interfaces/author"
import { Product } from "../interfaces/product"
import { User } from "../interfaces/user"

//  Evita usar comentarios innecesarios

// Bad ❌
export async function getUser(userId: string): Promise<User> {
  // Fetch user from API
  const res = await fetch(`https://api.example.com/users/${userId}`)
  // Check if user exists
  if (!res) {
    throw new Error(`User with id ${userId} not found`)
  }
  // Return user data
  return res.json()
}

// Good ✅
export async function getPostsByAuthor(authorId: string): Promise<Author> {
  const res = await fetch(`https://api.example.com/posts/${authorId}`)

  if (!res) {
    throw new Error(`User with id ${authorId} not found`)
  }

  return res.json()
}

// Los comentarios debe ser usados para justificar el "por que" de una decisión y no el "como" se hace.
// También pueder ser usados para dar contexto de una accion o para explicar una decisión de diseño.
export function assignTagsToProduct(product: Product): string[] {
  const tags: string[] = []

  // Add 'bestseller' tag if sales exceed a certain threshold
  // This helps highlight popular products on the frontend to boost conversions
  if (product.sales > 1000) {
    tags.push('bestseller')
  }

  // Tag as 'out-of-stock' if inventory is zero
  // This prevents showing unavailable products in certain store sections
  if (product.inventory === 0) {
    tags.push('out-of-stock')
  }

  // Add the tag 'new' if the product was created within the last 30 days
  // This helps in marketing campaigns to promote new arrivals
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  if (product.createdAt > thirtyDaysAgo) {
    tags.push('new')
  }

  return tags
}

