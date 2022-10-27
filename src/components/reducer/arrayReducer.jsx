const arrayReducer = (state, action) => {
  const { type, arrayName, payload } = action;
  let newState = {...state};
  switch (type) {
    case 'ADD':
      newState[arrayName] = [...state[arrayName], payload]
      return newState;
    case 'REMOVE':
      newState[arrayName] = state[arrayName].filter(element => element !== payload);
      return newState;
    default:
      return state;
  }
}

export default  arrayReducer;