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
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function Tip({ setTip, tip }: TipProps) {

    return (
        <>
            <form>
                <h3 className="font-black">Tip</h3>
                {tips.map(tipOption =>
                    <div>
                        <label className="w-12">{tipOption.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={() => setTip(tipOption.value)}
                            checked={tipOption.value === tip} />
                    </div>
                )}
            </form>
        </>
    )
}