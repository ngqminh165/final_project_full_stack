const apiKey = '4788701cc7ad4407b055d07a4c8466f1'
const data = {
    labels: [
      'Cases',
      'Vaccinations Initiated',
      'vaccinations Completed'
    ],
    datasets: []
  };

const config = {
    type: 'polarArea',
    data: data,
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        },
        plugins: {
            title: {
                display: true,
                text: 'County',
                color: 'rgb(54, 162, 235)',
                font: {
                    weight: 'bold',
                    size: '16px'
                }
            }
        }
    },
};


var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function removeData(chart) {
    chart.data.datasets = []
    /*
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });*/
    chart.update();
}

let getData = (url, chart) => {
    
  fetch(url)
  .then((response) => response.json())
  .then((item) => {
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

const doSearch = () => {
    let value = document.querySelector("#inputName").value;
    let fibs = zip[value]
    let url = `https://api.covidactnow.org/v2/county/${fibs}.json?apiKey=${apiKey}`;

    console.log(url)
    getData(url, myChart);

}
