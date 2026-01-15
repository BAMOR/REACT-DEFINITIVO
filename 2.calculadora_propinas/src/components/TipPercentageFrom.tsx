const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFromProps={
    setTipe: React.Dispatch<React.SetStateAction<number>>,
    tip:number
}

export const TipPercentageFrom = ({setTipe, tip}:TipPercentageFromProps) => {
  return (
    <div>
        <h3 className="font-black text-3xl">Propina:</h3>
        <form action="">
            {tipOptions.map(tipOptions =>(
            <div key={tipOptions.id} className="flex gap-2">
                <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                <input 
                id = {tipOptions.id}
                type="radio"
                name="tip"
                value={tipOptions.value}
                onChange={e=> setTipe(+e.target.value)}
                checked={tipOptions.value === tip}
                 />
            </div>

            ))}
           

        </form>
    </div>
  )
}
