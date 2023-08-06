import { ACTION } from "./types";
import createAction from "../../utils/action-creator";
import { actionType } from "./reducer";

export const sendToReducer = (payload: actionType) =>
  createAction(ACTION.ADD, payload);


export const clearAll = () => createAction(ACTION.CLEAR)
