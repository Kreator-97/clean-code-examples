
// Functions
// El nombre de las funciones deben de representar acciones que generalmente
// continene el verbo que mejor represente la acción que realiza seguido de un sustantivo.
// Se debe de evitar los detalles de la implementación y el uso de abreviaciones.

// Bad ❌
export function createUserIfNotExists(){}
export function updateUserIfNotEmpty(){}
export function sendEmailIfFieldsValid(){}

// Good ✅
export function createUser(){}
export function updateUser(){}
export function sendEmail(){}

// The same for methods
export class User {
  createUser(){}
  updateUser(){}
}

export class Payment {
  create(){}
  update(){}
}
