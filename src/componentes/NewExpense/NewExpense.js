import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props) =>{
    
    const [isEditing, setEditing]=useState(false);
   
    const onAgregarHandler=()=>{
        setEditing(true);
    }

    const onCancelarHandler=()=>{
        setEditing(false);
    }


    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setEditing(false);
    }



    return (
        <div className="new-expense">
            {!isEditing && <button onClick={onAgregarHandler}>Agregar gastos</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEdit={onCancelarHandler}></ExpenseForm>}
        </div>
        
    );
    
}

export default NewExpense;