import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: () => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button className="flex justify-between w-full p-2 margin bg-white hover:bg-gray-200 border-2 border-black"
            onClick={() => (addItem)}>
            <p className="text-2xl">{item.name}</p>
            <p className="font-black text-xl">{item.price}</p>
        </button >
    )
}