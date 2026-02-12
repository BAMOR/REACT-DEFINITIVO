import { useEffect, useState, type ChangeEvent } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { ErrorMesaage } from "./ErrorMesaage";
import { useBudget } from "../hooks/useBudget";




export const ExpenseForm = () => {

    


    const [expense, setExpense] = useState<DraftExpense>({
        amount:0,
        expenseName:'',
        category: '',
        date: new Date()

    })

    const [error,setError] = useState('')
    const [previusAmount, setPreviusAmount] = useState(0)
    const {dispatch, state,remaingBudget}= useBudget()

    useEffect(()=>{
        if(state.editingId){
            const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingId)[0]
            setExpense(editingExpense)
            setPreviusAmount(editingExpense.amount)
        }

    },[state.editingId])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

        const {name, value} =e.target
        const isAmountField = ['amount'].includes(name)
      
        setExpense({
            ...expense,
            [name]:isAmountField ? +value :value

        })

    }
    

    const handleChangeDate = (value:Value) =>{
       setExpense({
        ...expense,
        date:value
       })

    }


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        //validar
        if(Object.values(expense).includes('')){
            setError('todos los campos son obligatorios')
            return
        }

        // validar que no me pase del limite
         if((expense.amount - previusAmount) > remaingBudget){
            setError('Ese gasto se sale del presupuesto')
            return
        }


        //agregar un nuevo gasto
        if(state.editingId) {
            dispatch({type: 'upadte-expense', payload:{expense:{id:state.editingId, ...expense}}})

        }else{
            dispatch({type: 'add-expense', payload: {expense}})
            
        }
        

        //reiniciar el state
        setExpense({
            amount:0,
        expenseName:'',
        category: '',
        date: new Date()
        })
        setPreviusAmount(0)


    }
    return (
        <form
            className="space-y-5" onSubmit={handleSubmit}
            action="">
            <legend
                className="uppercase  text-center text-2xl font-black border-b-4 py-2 border-blue-500"
            >
                {state.editingId ? 'Guardar Cambios' : 'Nuevo Gasto'}</legend>

                {error && <ErrorMesaage>{error}</ErrorMesaage>}

            <div className="flex flex-col  gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >Nombre Gasto:</label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Anade el Nombre del gasto"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>


            <div className="flex flex-col  gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >Cantidad:</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Anade la cantidad del gasto: ej. 300"
                    className="bg-slate-100 p-2"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>


            <div className="flex flex-col  gap-2">
                <label
                    htmlFor="category"
                    className="text-xl"
                >Categoria:</label>
                <select
                    id="category"
                    className="bg-slate-100 p-2"
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="">---Seleccione---</option>
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

            </div>
            <div className="flex flex-col  gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >Fecha Gasto:</label>
                <DatePicker
                    className="bg-slate-100 p-2 border-0"
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>

            <input
                type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                
                value = {state.editingId ? 'Guardar Cambios' : 'Registrar Gasto'}
            />



        </form>
    )
}
