
import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const apiKey = '4788701cc7ad4407b055d07a4c8466f1'
let fibs = 41051
let url = `https://api.covidactnow.org/v2/county/${fibs}.json?apiKey=${apiKey}`;

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
let getData = (url) => {
    
    fetch(url)
    .then((response) => response.json())
    .then((item) => {
  
      //chart.config.options.plugins.title.text =  item.county
      let singleData = {      
          backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
            ],
            borderWidth: 1,
            data : [item.actuals.cases,
              item.actuals.vaccinationsInitiated,
              item.actuals.vaccinationsCompleted]
      
      }
      //data.datasets.push(singleData.data);
      //chart.data.datasets.push(singleData)
      //chart.update()
  
    })
    .catch((error) => console.log("Error"))
    .finally(()=> {
    })
  };

getData(url)

console.log(data)

const CovidChart = props => (
  <>
    <div className='header'>
      <h1 className='title'>Covid Chart</h1>
    </div>
    <PolarArea data={data} />
  </>
);

export default CovidChart;