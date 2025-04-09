 
// Personal naming conventions

// Usar camelCase para variables y funciones
// Ejemplos

export const userName = "John Doe"
export const userAge = 30
export function getUserName() {
  return userName
}
export function getUserAge() {
  return userAge
}

// Usar PascalCase para clases, interfaces, tipos y enums
// Ejemplos
export class User {

}

export interface Profile {
  name: string
  age: number
}

export type Customer = {
  name: string
}

export enum UserRole {
  Admin,
  User,
  Guest
}

// Usar UPPER_SNAKE_CASE para constantes
// Ejemplos

export const MAX_USERS = 100
export const API_URL = "https://api.example.com"
export const DEFAULT_TIMEOUT = 5000
export const DEFAULT_LANGUAGE = "en"

// Usar kebab-case para nombres de archivos
// Ejemplos

// Good ✅
// src/components/user-profile.tsx
// src/utils/format-date.ts
// src/hooks/use-fetch.ts
// src/styles/global-styles.css
// src/constants/api-endpoints.ts


// Bad ❌
// src/components/UserProfile.tsx
// src/utils/FormatDate.ts
// src/hooks/UseFetch.ts
// src/styles/GlobalStyles.css
// src/constants/ApiEndpoints.ts
