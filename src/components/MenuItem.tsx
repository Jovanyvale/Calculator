import type { MenuItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
    return (
        <button className="flex justify-between w-full p-2 margin bg-white hover:bg-gray-200 border-2 border-black rounded-lg"
            onClick={() => (dispatch({ type: "add-item", payload: { item } }))}>
            <p className="text-2xl">{item.name}</p>
            <p className="font-black text-xl">{item.price}</p>
        </button >
    )
}