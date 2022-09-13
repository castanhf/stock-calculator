import { updateFieldAction } from '../actions';
import { StoreState } from '../types/index';
import { UPDATE_FIELD } from '../constants/index';

export function field(state: StoreState, action: updateFieldAction): StoreState {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
  }
  return state;
}