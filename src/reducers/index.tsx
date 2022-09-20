import { combineReducers, Reducer } from 'redux';

import { componentAction, updateFieldAction } from '../actions';
import { StoreState } from '../types/index';
import { UPDATE_FIELD, ADD_COMPONENT } from '../constants/index';

//reducer!
export const rootReducer = combineReducers({
  components: components
})

//NOTE: this following line is wrong because 'Reducer<StoreState>'
//does not match the function 'components' below
// export const rootReducer: Reducer<StoreState> = combineReducers({

export function components(state: any, action: componentAction | updateFieldAction): StoreState {
  // console.log('state before: ', state, action);

  if (!state) state = {}

  const { type, data } = action;

  switch (type) {
    case ADD_COMPONENT:
      const newComponent = {
        id: data.id,
        shareQuantity: 0,
        sharePrice: 0, 
        subTotal: 0
      }
      return { ...state, [data.id]: newComponent }
    case UPDATE_FIELD:
      return { ...state, [data.id]: {...data.fields, id: data.id} };
  }
  return state
}