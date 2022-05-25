import { alertActions } from "../actions/alertActions";

const initialState = {
  isAlertOpen: false,
  alertMessageContent: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        isAlertOpen: true,
        alertMessageContent: action.content,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        isAlertOpen: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default reducer;
