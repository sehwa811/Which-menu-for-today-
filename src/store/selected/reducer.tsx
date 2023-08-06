import { ACTION } from "./types";

export interface selectedContext {
  ctr: string;
  ndl: string;
  meat: string;
  spc: string;
}

export interface actionType {
  type: string;
  payload: any;
}

const INITIAL_VALUE: selectedContext = {
    ctr: "",
    ndl: "",
    meat: "",
    spc: "",
};

export const reducer = (
  state = INITIAL_VALUE,
  action: actionType
): selectedContext => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.ADD:
      const { value, label } = payload;
      return { ...state, [value]: label };
    case ACTION.CLEAR:
      return INITIAL_VALUE;
    default:
        return state;
  }
};
