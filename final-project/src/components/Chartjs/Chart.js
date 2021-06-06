
import { PolarArea } from 'react-chartjs-2';

const CovidChart = props => {
  return  (
  <>
    <div className='header'>
      <h4 className='title'>Covid Status - zip code {props.zipcode}</h4>
    </div>
    <PolarArea data={props.data} />
  </>
  )
};

export default CovidChart;