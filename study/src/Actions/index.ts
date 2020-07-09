import { actionTypes } from "./actionTypes";

export const signUp = (visible: boolean) => {
  return {
    type: actionTypes.SIGNUP,
    visible,
  };
};

export const signIn = (visible: boolean) => {
  return {
    type: actionTypes.SIGNIN,
    visible,
  };
};
