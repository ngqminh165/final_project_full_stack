class MyChart {
    constructor(data, config, id) {
      this.data = data;
      this.config = config;
      this.chart = new Chart(
        document.getElementById(id),
        this.config
        );
    }
    get mychart() {
        return this.chart;
      }
}
  