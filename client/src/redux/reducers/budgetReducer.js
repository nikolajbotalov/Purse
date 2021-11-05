const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const GET_USER_TOTAL_BALANCE = "GET_USER_TOTAL_BALANCE";
const UPDATE_USER_BALANCE = "UPDATE_USER_BALANCE";
const GET_ALL_SOURCES = "GET_ALL_SOURCES";
const CREATE_SOURCE_BALANCE = "CREATE_SOURCE_BALANCE";
const GET_SOURCE_ITEMS = "GET_SOURCE_ITEMS";
const CREATE_ITEM_BALANCE = "CREATE_ITEM_BALANCE";
const UPDATE_ITEM_BALANCE = "UPDATE_ITEM_BALANCE";
const GET_ERROR = "GET_ERROR";

const initialState = {
  user: [],
  sourceOfBalance: [],
  totalBalance: 0,
  balanceItems: [],
  errorText: "",
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
        totalBalance: action.payload.currentBalance,
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
    case GET_SOURCE_ITEMS:
      return {
        ...state,
        balanceItems: action.payload,
      };
    case CREATE_ITEM_BALANCE:
      return {
        ...state,
        balanceItems: [...state.balanceItems, action.payload],
      };
    case UPDATE_ITEM_BALANCE:
      return {
        ...state,
      };
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
      };
    case GET_ERROR:
      return {
        ...state,
        errorText: action.payload,
      };
    default:
      return state;
  }
};

export default budgetReducer;
