import { authAPI } from "../../api";
import { someErrorMessage } from "./budgetAction";

export const signInAction = (payload) => ({
  type: "SIGN_IN",
  payload,
});

export const signUpAction = (payload) => ({
  type: "SIGN_UP",
  payload,
});

export const signInUser = ({ email, password }) => {
  return async (dispatch) => {
    return await authAPI
      .signIn(email, password)
      .then(({ data }) => dispatch(signInAction(data)))
      .catch(({ response }) =>
        dispatch(someErrorMessage(response.data.message))
      );
  };
};

export const signUpUser = ({ email, password }) => {
  return async (dispatch) => {
    await authAPI
      .signUp(email, password)
      .then(({ data }) => dispatch(signUpAction(data)))
      .catch(({ response }) =>
        dispatch(someErrorMessage(response.data.message))
      );
  };
};
