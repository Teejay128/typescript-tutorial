// Classes
class Invoice {
    client: string
    details: string
    amount: number

    constructor(c: string, d: string, a: number){
        this.client = c
        this.details = d
        this.amount = a
    }

    format(): string {
        return`${this.client} owes $${amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 500)
const invTwo = new Invoice('luigi', 'work on the luigi website', 250)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

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