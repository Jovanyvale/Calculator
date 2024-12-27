import type { MenuItem, OrderItem } from "../types"

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'delete-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    switch (action.type) {
        case "add-item":
            const itemExist = state.order.find(x => x.id == action.payload.item.id)
            let order: OrderItem[] = [];
            if (itemExist) {
                order = state.order.map(orderItem => orderItem.id == action.payload.item.id ?
                    { ...orderItem, quantity: orderItem.quantity + 1 } :
                    orderItem)
            } else {
                const newItem = { ...action.payload.item, quantity: 1 }
                order = [...state.order, newItem]
            }
            return { ...state, order }
                ;

        case "delete-item":
            const filteredOrder = state.order.filter(item => item.id != action.payload.id)
            return {
                ...state,
                order: filteredOrder
            }
                ;

        case "place-order":
            return {
                ...state,
                order: [],
                tip: 0
            }
                ;

        case "add-tip":
            return {
                ...state,
                tip: action.payload.value
            }
                ;
    }

    return state
}