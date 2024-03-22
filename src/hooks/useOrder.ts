import { useState } from "react"

export default function useOrder() {
  //usamos genberic para definir el tipo de dato que va a recibir el array y es un type definido en types llamado order item
  const [order, setOrder] = useState<OrderItem[]>([]) // en los state que son array se debe definir el type pero como no es facil de inferir se usa generic que se representa por <> y adentro el tipo de dato
  const [tip, setTip] = useState(0)//propina  
  //fn que agrega un item al array osea una orden al carrito
  const addItem = (item: MenuItem) => {
    // console.log('agregando...', item);
    //validamos si el producto ya esta en el carrito
    const itemExist = order.find(orderItem => orderItem.id === item.id) //lo buscamos por id
    // console.log(itemExist);

    if (itemExist) { //si existe  
      //aumentamos la cantidad del producto
      const updateOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
      setOrder(updateOrder)
    } else {
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])

    }
    
  }

  //fn para eliminar un elemto de la orden
  const removeItem = (id : MenuItem['id']) => {
    // console.log('eliminando', id)
    const updateOrder = order.filter(item => item.id !== id)
    setOrder(updateOrder);
    
  }

  //fn para procesar pedido
  const placeOrder = () => {
    //Reiniciamos los estados a su valor inicial
    setOrder([])
    setTip(0)
    console.log('ordenando...');
    
  }


  return {
    order,
    addItem,
    removeItem,
    tip,
    setTip,
    placeOrder

  }


}
