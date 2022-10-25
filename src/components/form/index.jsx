import { useState } from 'react';
import './form.scss';

function Form({ handleApiCall }) {

  let [restMethod, selectMethod] = useState('get');

  const handleMethodSelect = (e) => {
    e.preventDefault();
    selectMethod(e.target.id);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleApiCall(formData);
  };
  const methodArr = ['GET', 'POST', 'PUT', 'DELETE'];

  const methodButtons = methodArr.map((methodName) => {
    let className = methodName === restMethod ? 'active' : 'inactive';
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
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          {methodButtons}
        </label>
      </form>
    </>
  );
};

export default Form;
