import { actionType } from "../store/selected/reducer";

const createAction = (type: string, payload: actionType) => ({
  type,
  payload,
});
export default createAction;
