import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState } from 'react';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});

  const handleApiCall = (requestParams) => {
    // mock output
    const callApiData = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
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
