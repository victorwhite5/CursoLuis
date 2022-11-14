import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'

const Chart =(props)=>{
    const dataPointsValues=props.dataPoints.map(dataPoint=> dataPoint.value);//aca se esta conviertiendo cada elemento del arreglo en numeros
    const totalMaximun=Math.max(...dataPointsValues);//max solo admite listas---y el ... hace que separe el arreglo en 12 argumentos
 
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint=><ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximun} label={dataPoint.label} ></ChartBar>)}
        </div>
    );
}

export default Chart;