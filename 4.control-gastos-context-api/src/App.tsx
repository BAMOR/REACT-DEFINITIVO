import { BudgetForm } from "./components/BudgetForm"


export const App = () => {

  


  return (
   <>

   <header className="bg-blue-600 py-8 mex-h-72">

    <h1 className="uppercase text-center text-4xl text-white font-bold">
      Planificador de gastos
    </h1>

   </header>

   <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">

    <BudgetForm/>
   </div>
   
   </>
  )
}
