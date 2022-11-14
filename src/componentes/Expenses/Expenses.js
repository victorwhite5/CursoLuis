import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from "react";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses=(props)=>{
    
    const [enteredYear, setEnteredYear]=useState('2021');
    //const [expensesOfYear,setExpensesOfYear]=useState(props.item.filter(x => x.date.getFullYear().toString()===enteredYear));

    //const expensesOfYear=props.item.filter(x => x.date.getFullYear==enteredYear);

    const changeSelectedYear=(selectYear)=>{
        setEnteredYear(selectYear);
        //setExpensesOfYear(props.item.filter(x => x.date.getFullYear().toString()===selectYear));
    }

    const expensesOfYear=props.item.filter(x => { return x.date.getFullYear().toString()===enteredYear});

    

    return(
        <li>
            
            <Card className='expenses'> 
                <ExpensesFilter selectedYear={enteredYear} onChangeSelectedYear={changeSelectedYear}></ExpensesFilter>
                <ExpensesChart expenses={expensesOfYear}></ExpensesChart>
                <ExpensesList expenses={expensesOfYear}></ExpensesList>
              
               
            </Card>
        </li>
    );
}

export default Expenses;