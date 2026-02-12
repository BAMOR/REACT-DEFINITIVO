import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseDetail } from "./ExpenseDetail"
import { SwipeableList } from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css'

export const ExpenseList = () => {

    const { state } = useBudget()

    
    const filterExpense = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses


    const isEmpty = useMemo(() => filterExpense.length === 0, [filterExpense])

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10 w-full">
            
            {isEmpty ? (
                <p className="text-gray-600 text-2xl font-bold">
                    No hay Gastos
                </p>
            ) : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">
                        Listado de Gastos
                    </p>

                    <SwipeableList>
                        {filterExpense.map(expense => (
                            <ExpenseDetail
                                key={expense.id}
                                expense={expense}
                            />
                        ))}
                    </SwipeableList>
                </>
            )}

        </div>
    )
}
