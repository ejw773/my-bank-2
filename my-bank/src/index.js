//Import the createStore function from redux
import { createStore } from 'redux';

//Establish default state
const defaultState = {
  balance: 0
};

//List out actions
const actionIncrement = {
  type: 'increment'
};

const actionDecrement = {
  type: 'decrement'
};

//Reducer function, which takes state and action as 
function account(state=defaultState, action) {
  switch(action.type) {
    case 'increment':
      return {
        balance: state.balance + 1
      }
    case 'decrement':
      return {
        balance: state.balance - 1
      }
  }
  return state;
}

const store = createStore(account);
store.subscribe(() => {
  console.log('=== state has updated ===');
  const state = store.getState();
  console.log(state);
});

window.store = store;
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;