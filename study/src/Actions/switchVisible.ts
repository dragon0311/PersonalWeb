import { SIGNUP, SIGNIN } from "../Constants";

export const signUp = (visible: boolean) => {
  return {
    type: SIGNUP,
    visible,
  };
};

export const signIn = (visible: boolean) => {
  return {
    type: SIGNIN,
    visible,
  };
};
