import {DECREMENT, INCREMENT, RESET} from './Type';

const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
        return state.counter > 0 ? { ...state, counter: state.counter - 1 } : state;

    case RESET:
        return{...state,counter:0}
    default:
      return state;
  }
};

export default counterReducer;
 