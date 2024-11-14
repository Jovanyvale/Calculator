import { OrderItem } from "../types"
import { formatPrice } from "../helpers"

type OrderItemsProps = {
    order: OrderItem[]
}

export default function OrderItems({ order }: OrderItemsProps) {

    return (
        <>
            <h2 className="font-black text-4xl text-center">Order</h2>
            <div className="space-y-2 mt-5">
                {order.map(item => (item.quantity === 0 ?
                    <p className="text-opacity-50">Select something to order</p> :
                    (
                        <div className="border-2 border-solid border-white bg-gray-300">
                            <p className="text-lg font-black">{item.name} - {formatPrice(item.price)} </p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    )
                ))}
            </div>

        </>
    )
}