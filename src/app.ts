import { Invoice } from './models/invoice.js'
import { Payment } from './models/payments.js'
import { HasFormatter } from './interfaces/hasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

// const invOne = new Invoice('mario', 'work on the mario website', 500)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 250)

// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.format())
// })


const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement 
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let doc: HasFormatter;
    if(type.value == 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc)
})