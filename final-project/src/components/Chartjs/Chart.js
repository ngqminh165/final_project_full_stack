
import { PolarArea } from 'react-chartjs-2';
import React, { useEffect } from "react"
import {fibs2zip} from "../../data/zip"

let data = {
    labels: [
      'Cases',
      'Vaccinations Initiated',
      'vaccinations Completed'
    ],

    datasets: [{
        
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
        ],
        borderWidth: 1,
        data : [37221, 397827, 258219]
        
    }]
    
  };



console.log(data)

const CovidChart = props => {
  console.log(props.data)
  return <PolarArea data={props.data} />
};

export default CovidChart;