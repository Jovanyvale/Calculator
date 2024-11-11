import { useState } from "react";
import { OrderItem } from "../types";

export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    function addItem() {
        console.log("Funciona")
    }

    return {
        addItem
    }
}