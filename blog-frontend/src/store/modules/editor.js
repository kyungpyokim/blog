import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

import * as api from 'lib/api';

const WRITE_POST = 'editor/WRITE_POST';

export const writePost = createAction(WRITE_POST, api.writePost);

const initialState = Map({
    postId: null
});

export default handleActions({
    ...pender({
        type: WRITE_POST,
        onSuccess: (state, action) => {
            const {_id} = action.payload.data;
            return state.set('postId', _id)
        }
    })
}, initialState);
