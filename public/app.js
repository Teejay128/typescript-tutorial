"use strict";
// Classes
class Invoice {
    // readonly client: string // Value cannot be mutated
    // private details: string // Value can only be mutated inside class
    // public amount: number // Value can be mutated anywhere
    constructor(
    // Only works when you use access modifiers
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 500);
const invTwo = new Invoice('luigi', 'work on the luigi website', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.format());
});
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
