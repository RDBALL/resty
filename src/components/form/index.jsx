import { useReducer } from 'react';
import  propReducer from '../reducer';
import './form.scss';

const initialState = {
  formData: {
    method: 'get',
    url: '',
  }
}

const Form = ({ handleApiCall }) => {

  let [state, dispatch] = useReducer(propReducer, initialState);
  const { formData } = state;

  const setFormData = (payload) => dispatch({propName: 'formData', payload});

  const handleMethodSelect = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      method: e.target.id,
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      url: e.target.value,
      data: e.target?.data?.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall(formData);
  }

  const methodArr = ['GET', 'POST', 'PUT', 'DELETE'];

  const methodButtons = methodArr.map((methodName) => {
    let className = methodName === formData.method ? 'active' : 'inactive';
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
          <input onChange={handleChange} name='url' type='text' value={formData.url} data-testid='form-url'/>
          <button type="submit" data-testid='formSubmitButton'>GO!</button>
        </label>
        <label className="methods">
          {methodButtons}
        </label>
        {formData.method === 'POST' || formData.method === 'PUT' ?
          <label className='reqJSON'><textarea  name='data' /></label> :
          null}
      </form>
    </>
  );
};

export default Form;
