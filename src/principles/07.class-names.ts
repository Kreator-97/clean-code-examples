
// Class names
// Los nombres de las clases deben de ser sustantivos y deben de tener el sustantivo del objeto que
// representan. Se debe de evitar el uso de abreviaciones y los detalles de la implementación.

// Good ✅
export class Customer {}
export class WikiPage {}
export class Account {}
export class UrlParser {}

// Bad ❌
export class C {}
export class CustomerData {}
export class WikiPageData {}
export class AccountInfo {}
export class UrlParserForChromeBrowser {}
export class AccountClass {}

// El nombre de la clase debe de ser singular y no plural. También el nombre otorga la responsabilidad de la clase.

// Good ✅
export class User {
  constructor(public name: string) {}
  getName() {
    return this.name
  }

  setName(name: string) {
    this.name = name
  }
}

// Bad ❌
export class Users {

  constructor(public name: string) {}
  getName() {
    return this.name
  }

  verifySubscription() {
    // ... verify subscription logic
  }
}

