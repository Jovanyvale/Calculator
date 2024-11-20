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
}

export default function Tip({ setTip }: TipProps) {

    return (
        <>
            <form action="">
                <h3 className="font-black">Tip</h3>
                {tips.map(tip =>
                    <div>
                        <label className="w-12">{tip.label}</label>
                        <input type="radio" name="tip" value={tip.value} />
                    </div>
                )}
            </form>
        </>
    )
}