import { useState } from 'react';
import './form.scss';

const Form = ({ handleApiCall }) => {

  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  const handleMethodSelect = (e) => {
    e.preventDefault();
    setMethod(e.target.id);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleApiCall({ method, url, data });
  };
  const methodArr = ['GET', 'POST', 'PUT', 'DELETE'];

  const methodButtons = methodArr.map((methodName) => {
    let className = methodName === method ? 'active' : 'inactive';
    return (
      <span
        id={methodName}
        onClick={handleMethodSelect}
        key={methodName}
        className={className}>
        {methodName}
      </span>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange={(e) => setUrl(e.target.value)} name='url' type='text' />
          <button type="submit" data-testid='formSubmitButton'>GO!</button>
        </label>
        <label className="methods">
          {methodButtons}
        </label>
        {method === 'POST' || method === 'PUT' ?
          <label className='reqJSON'><textarea onChange={(e) => setData(e.target.value)} /></label> :
          null}
      </form>
    </>
  );
};

export default Form;
