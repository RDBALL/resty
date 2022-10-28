const propReducer = (state, action) => {
  const { payload, propName } = action;
  let newState = {...state};
  newState[propName] = payload; 
  return newState;
}

export default propReducer;

