import { Vue, Component, Prop } from 'vue-property-decorator'

interface NamedPerson {
    stocks: {id: number, name: string, price: number}[];
}
@Component({})
export default class Stocks extends Vue implements NamedPerson{
    stocks = [
        { id: 1, name: 'Apple', price: 89 },
        { id: 2, name: 'Google', price: 150 },
        { id: 3, name: 'Microsoft', price: 90 },
        { id: 4, name: 'Nintendo', price: 20 }
    ];
}