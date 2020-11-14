import * as actionTypes from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const setCards = (cards) => {
  return {
    type: actionTypes.SET_CARDS,
    cards: cards,
  };
};

export const initCards = () => {
  return (dispatch) => {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((res) => {
        let cards = res.data.slice(0, 15);
        cards = cards.map((card) => {
          return { ...card, isChecked: false, isEditMode: false };
        });
        dispatch(setCards(cards));
      })
      .catch((error) => console.log(error));
  };
};

export const cardCheckedHandler = (cards, id) => {
  const updatedCards = [...cards];
  const cardIndex = updatedCards.findIndex((c) => {
    return c.Number === id;
  });
  let updatedCard = updatedCards[cardIndex];
  updatedCard = {
    ...updatedCard,
    isChecked: !updatedCards[cardIndex].isChecked,
  };
  updatedCards[cardIndex] = updatedCard;
  return {
    type: actionTypes.CARD_CHECKED_HANDLER,
    cards: updatedCards,
  };
};

export const editModeEnabled = (cards, id) => {
  const updatedCards = [...cards];
  const cardIndex = updatedCards.findIndex((c) => {
    return c.Number === id;
  });
  let updatedCard = updatedCards[cardIndex];
  updatedCard = {
    ...updatedCard,
    isChecked: false,
    isEditMode: true,
  };
  updatedCards[cardIndex] = updatedCard;
  return {
    type: actionTypes.EDIT_MODE_ENABLED,
    cards: updatedCards,
  };
};

export const saveChanges = (cards, id, updatedTempCard) => {
  const updatedCards = [...cards];
  const cardIndex = updatedCards.findIndex((c) => {
    return c.Number === id;
  });
  let updatedCard = updatedCards[cardIndex];
  updatedCard = {
    ...updatedTempCard,
    isEditMode: false,
  };
  updatedCards[cardIndex] = updatedCard;
  return {
    type: actionTypes.SAVE_CHANGES,
    updatedCards: updatedCards,
  };
};

export const cancelChanges = (cards, id) => {
  const updatedCards = [...cards];
  const cardIndex = updatedCards.findIndex((c) => {
    return c.Number === id;
  });
  const updatedCard = updatedCards[cardIndex];
  updatedCard.isEditMode = false;
  updatedCards[cardIndex] = updatedCard;
  return {
    type: actionTypes.CANCEL_CHANGES,
    updatedCards: updatedCards,
  };
};

export const deleteCardsHandler = (cards) => {
  const updatedCards = [...cards].filter((card) => !card.isChecked);
  return {
    type: actionTypes.DELETE_CARDS_HANDLER,
    updatedCards: updatedCards,
  };
};

export const addCardHandler = (cards, newCard) => {
  const card = { ...newCard };
  card.Number = uuidv4();
  return {
    type: actionTypes.ADD_CARD_HANDLER,
    updatedCards: [...cards, card],
  };
};

export const signInUser = (email, password) => {
  const newUser = {
    email,
    password,
  };
  localStorage.setItem("user", JSON.stringify(newUser));
  return {
    type: actionTypes.SIGN_IN_USER,
    user: localStorage.getItem("user"),
  };
};

export const logoutUser = () => {
  localStorage.removeItem("user");
  return {
    type: actionTypes.LOGOUT_USER,
    user: null,
  };
};

export const viewModeToggle = (viewMode) => {
  return {
    type: actionTypes.VIEW_MODE_TOGGLE,
    isOnlyViewMode: !viewMode,
  };
};
