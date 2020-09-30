import { Actions } from "../../constants/actions";

export const setTab = (index) => {
  return {
    type: Actions.SET_TAB,
    payload: index,
  };
};
