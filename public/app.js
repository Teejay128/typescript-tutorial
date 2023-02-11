import { Invoice } from './models/invoice.js';
import { Payment } from './models/payments.js';
import { ListTemplate } from './models/listTemplate.js';
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("Hello World")
console.log(docOne);
const docThree = {
    uid: 26,
    resourceName: "Person",
    data: { name: "Aribad" }
};
const docFour = {
    uid: 45,
    resourceName: "Shopping List",
    data: ["Bread", "Milk", "Toilet Roll"]
};
