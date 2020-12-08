const redux = require("redux");
const createStore = redux.createStore;

// string constant
const BUY_CAKE = "BUY_CAKE";

// define action ..action creator function that returns an actions
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Initial Redux Action",
  };
}

// reducers(previousState,action)=>newState
// initial state
const initialState = {
  numOfCakes: 10,
};

// reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
