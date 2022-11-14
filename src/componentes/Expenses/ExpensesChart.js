import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart =(props)=>{

    const chartDataPoints=[
        {label: 'Ene', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Abr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Ag', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dic', value: 0},
    ];

    for (const expense of props.expenses){
        const expenseMonth=expense.date.getMonth();//empieza en 0, enero es 0
        chartDataPoints[expenseMonth]+=expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints}></Chart>
    );
}

export default ExpensesChart;