// Interfaces
interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: "aribad",
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log("I spent ", amount)
        return amount
    }
}

const greetPerson = (person: IsPerson) => {
    console.log(`Hello ${person.name}`)
}

greetPerson(me)

console.log(me)

import { Invoice } from './models/invoice.js'

const invOne = new Invoice('mario', 'work on the mario website', 500)
const invTwo = new Invoice('luigi', 'work on the luigi website', 250)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.format())
})
const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement 
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})