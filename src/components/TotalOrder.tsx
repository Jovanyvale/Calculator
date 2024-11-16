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
                <p>Total expected to pay: <span className="font-black">${totalAmount}</span></p>
            </div>
        </>
    )
}