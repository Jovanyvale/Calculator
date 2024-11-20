import { useMemo } from "react"
import { OrderItem } from "../types"

type TotalOrderProps = {
    order: OrderItem[]
}

export default function totalOrder({ order }: TotalOrderProps) {

    const totalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    return (
        <>
            <div className="mt-4">
                <h3 className="font-black">Total</h3>
                <p>Subtotal: <span>${totalAmount}</span></p>
                <p>Tip: <span>$0</span></p>
                <p className="text-xl">Total: <span className="font-black">$0</span></p>
            </div>
        </>
    )
}