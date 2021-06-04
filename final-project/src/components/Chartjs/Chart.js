
import { PolarArea } from 'react-chartjs-2';

const CovidChart = props => {
  return <PolarArea data={props.data} />
};

export default CovidChart;