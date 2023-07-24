// counterReducer.js
const initialState = {
  destinationList: [],
  souceList: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DESTINATION_LIST":
      return { ...state, dedestinationLists: action.data};
    case "UPDATE_SOURCE_LIST":
      return { ...state, sourceList: action.data };
    default:
      return state;
  }
};

export default flightReducer;
