type MenuItem = {
    id: number
    name: string
    price: number
}

//tomamos todo lo que tiene orderItem y le añadimos la cantidad, este type nos va a servir para defionir los tyupes de una orden
type OrderItem = MenuItem & {
    quantity: number
}