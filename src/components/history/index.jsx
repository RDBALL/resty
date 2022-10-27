import JSONPretty from 'react-json-pretty';
import './style.scss'

function History({ apiRequestHistory }) {

  return (
    <section className="history-display">
      <span>Request History</span>
      <JSONPretty data={apiRequestHistory} collapsed={true} name="API Request history"/>
    </section>
  )
}

export default History;