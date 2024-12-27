import { OrderActions } from "../reducers/order-reducer"

const tips = [
    {
        id: 0,
        value: 0,
        label: "No tip"
    },

    {
        id: 1,
        value: 0.10,
        label: "10%"
    },

    {
        id: 2,
        value: 0.20,
        label: "20%"
    },

    {
        id: 3,
        value: 0.30,
        label: "30%"
    }
]

type TipProps = {
    dispatch: React.Dispatch<OrderActions>
    tip: number
}

export default function Tip({ dispatch, tip }: TipProps) {

    return (
        <>
            <form>
                <h3 className="font-black">Tip</h3>
                {tips.map(tipOption =>
                    <div key={tipOption.id}>
                        <label className="w-12">{tipOption.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={() => dispatch({ type: 'add-tip', payload: { value: tipOption.value } })}
                            checked={tipOption.value === tip} />
                    </div>
                )}
            </form>
        </>
    )
}