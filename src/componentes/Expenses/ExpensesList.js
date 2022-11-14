import React from "react";
import './ExpensesList.css';
import ExpenselItem from "./ExpenseItem";

const ExpensesList=(props)=>{

    
    if(props.expenses.length===0){
        return <h2 className="expenses-list__fallback">No hay gastos.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(x=> <ExpenselItem key={x.id} title={x.title} amount={x.amount} date={x.date}></ExpenselItem>)}
        </ul>
    );
}

export default ExpensesList;