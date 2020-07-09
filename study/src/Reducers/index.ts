// import { Reducer, Module, EffectModule, ModuleDispatchProps } from 'redux-epics-decorator'
// import { Action } from 'redux-actions';




// const initState: IModalVisible = {
//   signUp: false,
//   signIn: false,
// }

// @Module('Global')
// export class GlobalModule extends EffectModule<GlobalStateProps> {
//   readonly defaultState: GlobalStateProps = {
//     modalVisible: {
//       signUp: false,
//       signIn: false
//     }
//   }

//   @Reducer()
//   switchModalVisible(state: GlobalStateProps, {payload}: Action<{type: string; visible: boolean}>){
//     return produce(state, draft => {
//       switch (payload.type) {
//         case 'signUp':
//           draft.modalVisible.signUp = payload.visible;
//           break;
//         case 'signIn':
//           draft.modalVisible.signIn = payload.visible;
//           break;
//         default:
//           break;
//       }
//     })
//   }
// }

// export type GlobalDispatchProps = ModuleDispatchProps<GlobalModule>;
// export type GlobalProps = GlobalStateProps & GlobalDispatchProps;
// export default GlobalModule

import { combineReducers } from "redux";
import produce from 'immer';
import { actionTypes } from "../Actions/actionTypes";

interface IModalVisible {
  signUp: boolean;
  signIn: boolean;
}

export interface GlobalStateProps {
  modalVisible: IModalVisible;
}

export interface ISwitchVisibleActions {
  type: string;
  visible: boolean;
} 

const defaultState = {
    signUp: false,
    signIn: false,
}

const modalVisible = (state: IModalVisible = defaultState , action: ISwitchVisibleActions) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.SIGNUP:
        draft.signUp = action.visible;
        break;
      case actionTypes.SIGNIN:
        draft.signIn = action.visible;
        break;
      default:
        break;
    }
  })
}

const rootReducer = combineReducers({
  modalVisible
});

export default rootReducer