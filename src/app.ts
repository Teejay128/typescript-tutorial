import { Invoice } from './models/invoice.js'
import { Payment } from './models/payments.js'
import { HasFormatter } from './interfaces/hasFormatter.js'
import { ListTemplate } from './models/listTemplate.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement 
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// List template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let doc: HasFormatter;
    if(type.value == 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})

// GENERICS

const addUID = <T extends object> (obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid}
}

let docOne = addUID({ name: "yoshi", age: 40 })
// let docTwo = addUID("Hello World")

console.log(docOne)

interface Resource <T> {
    uid: number,
    resourceName: string
    data: T
}

const docThree: Resource<object> = {
    uid: 26,
    resourceName: "Person",
    data: { name: "Aribad" }
}

const docFour: Resource <string[]> = {
    uid: 45,
    resourceName: "Shopping List",
    data: ["Bread", "Milk", "Toilet Roll"]
}


