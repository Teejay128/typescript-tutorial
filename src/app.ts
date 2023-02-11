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

    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value == 'invoice'){
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')

    toFrom.value = ""
    details.value = ""
    amount.value = ""
})
