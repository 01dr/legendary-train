const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';


export const incrementCounter = () => ({
  type: COUNTER_INCREMENT,
});

export const decrementCounter = () => ({
  type: COUNTER_DECREMENT,
});


export default (state = 0, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};


export const getCounter = state => state.counter;