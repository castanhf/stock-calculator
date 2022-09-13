import * as constants from '../constants';

export interface UpdateField {
    type: constants.UPDATE_FIELD;
}

//type has to match the interface
export type updateFieldAction = UpdateField;

export function updateField(): UpdateField {
    return {
        type: constants.UPDATE_FIELD
    }
}