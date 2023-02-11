const me = {
    name: "aribad",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
console.log(me);
import { Invoice } from './models/invoice.js';
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
