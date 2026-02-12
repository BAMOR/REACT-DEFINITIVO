import { useMemo } from "react"
import {
  LeadingActions,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import { formatDate } from "../helpers"
import type { Expense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

type ExpenseDetailProps = {
  expense: Expense
}

export const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {

  const categoryInfo = useMemo(
    () => categories.filter(cat => cat.id === expense.category)[0],
    [expense]
  )

  const { dispatch } = useBudget()

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() =>
          dispatch({
            type: 'get-expense-by-id',
            payload: { id: expense.id }
          })
        }
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() =>
          dispatch({
            type: 'remove-expense',
            payload: { id: expense.id }
          })
        }
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableListItem
      maxSwipe={30}
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
    >
      <div className="bg-white w-full shadow-lg p-6 border-b border-gray-200 flex gap-5 items-center hover:bg-gray-50 transition-colors duration-200">

        <div>
          <img
            src={`/icono_${categoryInfo.icon}.svg`}
            alt="icono gasto"
            className="w-16"
          />
        </div>

        <div className="flex-1 space-y-2">
          <p className="text-sm font-bold uppercase text-slate-500">
            {categoryInfo.name}
          </p>
          <p className="text-lg font-medium">
            {expense.expenseName}
          </p>
          <p className="text-slate-600 text-sm">
            {formatDate(expense.date!.toString())}
          </p>
        </div>

        <AmountDisplay
          amount={expense.amount}
        />

      </div>
    </SwipeableListItem>
  )
}
