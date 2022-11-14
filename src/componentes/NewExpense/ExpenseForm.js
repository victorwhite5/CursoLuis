import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    //se puede hacer esto en un solo state por ende lo comento
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    /*const [userInput, setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });*/

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value); //esta es con 3 states
        
        //setUserInput({ //esta es con un state pero hecha malarda
          //  ...userInput,//para que no se pierda el valor anterior de los atributos del objeto
            //enteredTitle:event.target.value
        //})

        //setUserInput((prevState) =>{ esta es con un state pero hecho bien
          //  return {...prevState, enteredTitle:event.target.value};
        //});
    }

    const amountChangeHandler=(event2)=>{
        setEnteredAmount(event2.target.value);
        //setUserInput({
          //  ...userInput,//para que no se pierda el valor anterior de los atributos del objeto
            //enteredAmount:event2.target.value
        //})
    }

    const dateChangeHandler=(event3)=>{
        setEnteredDate(event3.target.value);
        //setUserInput({
          //  ...userInput,//para que no se pierda el valor anterior de los atributos del objeto
            //enteredDate:event3.target.value
       // })
    }

    const submitHandler=(event4)=>{
        event4.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        //console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Titulo</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div> 

                <div className="new-expense__controls">
                    <label>Monto</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>   

                <div className="new-expense__controls">
                    <label>Fecha</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div> 
            </div>
                   
            <div className="new-expense__actions">
                <button type="submit">Agregar</button>
                <button type="button" onClick={props.onCancelEdit}>Cancelar</button>
            </div>


            
        </form>
    );

}

export default ExpenseForm;