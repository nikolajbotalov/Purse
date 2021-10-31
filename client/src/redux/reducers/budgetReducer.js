const GET_USER_TOTAL_BALANCE = 'GET_USER_TOTAL_BALANCE';
const UPDATE_USER_BALANCE = 'UPDATE_USER_BALANCE';
const GET_ALL_SOURCES = 'GET_ALL_SOURCES';
const CREATE_SOURCE_BALANCE = 'CREATE_SOURCE_BALANCE';

const initialState = {
  sourceOfBalance: [],
  totalBalance: 0,
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_TOTAL_BALANCE:
      return {
        ...state,
        totalBalance: action.payload,
      };
    case UPDATE_USER_BALANCE: {
      return {
        ...state,
        totalBalance: +action.payload + state.totalBalance,
      };
    }
    case GET_ALL_SOURCES:
      return {
        ...state,
        sourceOfBalance: action.payload,
      };
    case CREATE_SOURCE_BALANCE:
      return {
        ...state,
        sourceOfBalance: [...state.sourceOfBalance, action.payload],
      };
    default:
      return state;
  }
};

export default budgetReducer;
