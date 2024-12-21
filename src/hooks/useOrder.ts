import { useState } from "react";
import { OrderItem, MenuItem } from "../types";

export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    function addItem(item: MenuItem) {
        const itemExist = order.find(x => x.id == item.id)

        if (itemExist) {
            const newOrder = order.map(orderItem => orderItem.id == item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem)
            setOrder(newOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    function deleteItem(id: MenuItem['id']) {
        const filteredOrder: OrderItem[] = order.filter(item => item.id != id)
        setOrder(filteredOrder)
    }

    function placeOrder() {
        setTip(0)
        setOrder([])
    }

    return {
        tip,
        setTip,
        order,
        addItem,
        deleteItem,
        placeOrder
    }
}