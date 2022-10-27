import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    if(requestParams?.method && requestParams?.url){
      handleApiCall(requestParams)
    }
  }, [requestParams]);

  const handleApiCall = async (requestParams) => {
    const callApiData = await axios({
      method: requestParams.method,
      url: requestParams.url,
      data: requestParams.data
    })
    setData(callApiData);
    setRequestParams(requestParams);
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={handleApiCall} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
