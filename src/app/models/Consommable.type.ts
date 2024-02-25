import { Stock } from "./Stock.type"

export type Consommable ={
    id?: number,
    nom: string,
    cout: number,
    stock: Stock
}