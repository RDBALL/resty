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
  requestParams: null
}

const App = () => {
  // ---------------> Refactoring to useReducer

  let [state, dispatch] = useReducer(propReducer, initialState);
  const { requestParams, data } = state;
  const updateData = (payload) => dispatch({ propName: 'data', payload });
  const updateParams = (payload) => {
    dispatch({ propName: 'requestParams', payload })
    if (payload?.method && payload?.url) {   
      handleApiCall(payload)
  }}


  // let [data, setData] = useState(null);
  // let [requestParams, setRequestParams] = useState({});

  // useEffect(() => {
  //   if(requestParams?.method && requestParams?.url){
  //     handleApiCall(requestParams)
  //   }
  // });

  async function handleApiCall (params) {
    const callApiData = await axios({
      method: params.method,
      url: params.url,
      data: params?.data
    })
    updateData(callApiData.data);
  }
  // const handleApiCall = async (requestParams) => {
  //   const callApiData = await axios({
  //     method: requestParams.method,
  //     url: requestParams.url,
  //     data: requestParams.data
  //   })
  //   setData(callApiData);
  //   setRequestParams(requestParams);
  // }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method}</div>
      <div>URL: {requestParams?.url}</div>
      <Form handleApiCall={updateParams} />
      <Results data={data} />
      <History />
      <Footer />
    </>
  );
}
//     <>
//       <Header />
//       <div>Request Method: {requestParams.method}</div>
//       <div>URL: {requestParams.url}</div>
//       <Form handleApiCall={handleApiCall} />
//       <Results data={data} />
//       <History />
//       <Footer />
//     </>
//   );
// }

export default App;
