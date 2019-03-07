import { createAction, handleAction } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

const initialState = Map({});

export default handleAction({}, initialState);
