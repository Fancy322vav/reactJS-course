import * as actions from "../actions/actionTypes";

const initialState = {
  cards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CARDS:
      return {
        ...state,
        cards: action.cards,
      };
    case actions.CARD_CHECKED_HANDLER:
      return {
        ...state,
        cards: action.cards,
      };
    case actions.EDIT_MODE_ENABLED:
      return {
        ...state,
        cards: action.cards,
      };
    case actions.SAVE_CHANGES:
      return {
        ...state,
        cards: action.updatedCards,
      };
    case actions.CANCEL_CHANGES:
      return {
        ...state,
        cards: action.updatedCards,
      };
    case actions.DELETE_CARDS_HANDLER:
      return {
        ...state,
        cards: action.updatedCards,
      };
    case actions.ADD_CARD_HANDLER:
      return {
        ...state,
        cards: action.updatedCards,
      };
    default:
      return state;
  }
};

export default reducer;
