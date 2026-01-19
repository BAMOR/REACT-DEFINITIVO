export type MenuItem={
    id:number,
    name:string,
    price:number,
    category:string,
    isFavorite:boolean
}

export type cartItem = MenuItem & {
    quantity:number

}