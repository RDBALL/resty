import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import { useReducer } from 'react';
import propReducer from './components/reducer';
import axios from 'axios';

const initialState = {
  data: null,
  requestParams: null,
  apiRequestHistory: []
}

const App = () => {


  let [state, dispatch] = useReducer(propReducer, initialState);
  
  const { requestParams, data, apiRequestHistory } = state;
  
  const updateData = (payload) => dispatch({ propName: 'data', payload });
  
  const updateHistory = (payload) => {
    dispatch({propName: 'apiRequestHistory', payload: [...apiRequestHistory, payload]})
  }

  const updateParams = (payload) => {
    dispatch({ propName: 'requestParams', payload })
    if (payload?.method && payload?.url) {   
      handleApiCall(payload)
  }}

  async function handleApiCall (params) {
    const callApiData = await axios({
      method: params.method,
      url: params.url,
      data: params?.data
    })
    updateData(callApiData.data);
    updateHistory({data: callApiData.data, params})
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method}</div>
      <div>URL: {requestParams?.url}</div>
      <Form handleApiCall={updateParams} />
      <Results data={data} />
      <History apiRequestHistory={apiRequestHistory}/>
      <Footer />
    </>
  );
}

export default App;
