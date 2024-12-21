import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatPrice } from "../helpers"

type TotalOrderProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function totalOrder({ order, tip, placeOrder }: TotalOrderProps) {

    const totalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipTotal = useMemo(() => totalAmount * tip, [tip, order])
    const total = useMemo(() => totalAmount + tipTotal, [tip, totalAmount])

    return (
        <>
            <div className="mt-4">
                <h3 className="font-black">Total</h3>
                <p>Subtotal: <span>${totalAmount}</span></p>
                <p>Tip: <span>{formatPrice(tipTotal)}</span></p>
                <p className="text-xl">Total: <span className="font-black"> {formatPrice(total)} </span></p>
            </div>
            <button className=" w-full bg-black text-white disabled:bg-gray-600"
                disabled={total === 0} onClick={() => placeOrder()}>
                Save order
            </button>
        </>
    )
}