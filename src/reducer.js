import { add } from './action';


const initialState = {
  count: 0
}

console.log(add);

const RReducer = (state= initialState, action=add) => {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default RReducer;