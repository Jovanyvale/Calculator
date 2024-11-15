import { MenuItem, OrderItem } from "../types"
import { formatPrice } from "../helpers"

type OrderItemsProps = {
    order: OrderItem[]
    deleteItem: (id: MenuItem['id']) => void
}

export default function OrderItems({ order, deleteItem }: OrderItemsProps) {

    return (
        <>
            <h2 className="font-black text-4xl text-center">Order</h2>
            <div className="space-y-2 mt-5">
                {order.map(item => (item.quantity === 0 ?
                    <p className="text-opacity-50">Select something to order</p> :
                    (
                        <div className="flex justify-between p-4 border-t-2 border-white last-of-type:border-b-2">
                            <div>
                                <p className="text-lg font-black">{item.name} - {formatPrice(item.price)} </p>
                                <p>Quantity: {item.quantity}</p>
                            </div>

                            <button className="h-8 w-8 bg-black text-white rounded-full"
                                onClick={() => { deleteItem(item.id) }}>
                                X
                            </button>
                        </div>
                    )
                ))}
            </div>

        </>
    )
}