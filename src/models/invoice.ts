import { HasFormatter } from '../interfaces/hasFormatter.js'

export class Invoice implements HasFormatter{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(): string {
        return`${this.client} owes $${this.amount} for ${this.details}`
    }
}