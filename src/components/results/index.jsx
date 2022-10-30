import './style.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/1337.css';

const Results = ({ data }) => {
  return (
    <section data-testid='returnResults'>
      {data ?
        (<>
          <span>Results
          <JSONPretty data={data} />
          </span>
        </>) :
        (<span>Awaiting API Request</span>)
      }
    </section>
  );
}
export default Results;