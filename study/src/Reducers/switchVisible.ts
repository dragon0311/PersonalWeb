import {
  SIGNUP,
  SIGNIN,
} from '../Constants'

const initState = {
  signUp: false,
  signIn: false,
}

const switchVisible = (state = initState, action: any) => {
  switch(action.type){
    case SIGNUP:
      return {
        ...state,
        signUp: action.visible,
      };
    case SIGNIN:
      return {
        ...state,
        signIn: action.visible,
      };
    default:
      return state;
  }
}

export default switchVisible;