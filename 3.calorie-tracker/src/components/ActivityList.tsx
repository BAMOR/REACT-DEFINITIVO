import type { Activity } from "../types"

type ActivityListProps = {
    activities: Activity[]
}

export const ActivityList = ({ activities }: ActivityListProps) => {
    return (
        <>
            <h2 className=" text-4xl font-bold text-slate-600 text-center">
                Comida y Actividades

            </h2>
            {activities.map(act=> (
                <div key={act.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p>
                            {act.category}
                        </p>

                         <p className="text-2xl font-bold pt-5">
                            {act.name}
                        </p>

                         <p className="font-black text-4xl text-lime-500">
                            {act.calories} {''}
                            <span>Calorias</span>
                        </p>

                    </div>

                    <div>

                    </div>

                </div>
            ))}
        </>
    )
}
