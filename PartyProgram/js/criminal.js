const criminalApiKey = 'NvSKSODlFP85TBQe7bWYPls510Uza7rJYqywnzap'

let criminalData = {
  labels: [
    'Violen Crime',
    'Motor Vehicle Theft',
    'Rape'
        ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)'
    ],
    borderWidth: 1
  }]
};

let criminalConfig = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


const criminalChart = new MyChart(criminalData, criminalConfig, 'CriminalChart');

/*


var CriminalChart = new Chart(
    document.getElementById('CriminalChart'),
    config
);


function removeData(chart) {
    chart.data.datasets = []
    chart.update();
}

var getData = (url, chart) => {
    
  fetch(url)
  .then((response) => response.json())
  .then((item) => {
    console.log(item)
    removeData(chart)

    chart.config.options.plugins.title.text =  item.county
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
    chart.data.datasets.push(singleData)
    chart.update()

  })
  .catch((error) => console.log("hyhy"))
  .finally(()=> {
  })
};

var doSearch = () => {
    let state_code = 'OR'
    let url = `https://api.usa.gov/crime/fbi/sapi/api/nibrs/violent-crime/offense/states/${state_code}/count?API_KEY=${criminalApiKey}`

    console.log(url)
    getData(url, CriminalChart);

}*/