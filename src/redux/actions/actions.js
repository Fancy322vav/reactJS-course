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
        console.log("initCards");
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
  console.log(actionTypes.CARD_CHECKED_HANDLER, cards, id);
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
  console.log(actionTypes.EDIT_MODE_ENABLED, cards, id);
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
  console.log(actionTypes.SAVE_CHANGES, cards, id, updatedTempCard);
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
  console.log(actionTypes.CANCEL_CHANGES, cards, id);
  return {
    type: actionTypes.CANCEL_CHANGES,
    updatedCards: updatedCards,
  };
};

export const deleteCardsHandler = (cards) => {
  const updatedCards = [...cards].filter((card) => !card.isChecked);
  console.log(actionTypes.DELETE_CARDS_HANDLER, cards);
  return {
    type: actionTypes.DELETE_CARDS_HANDLER,
    updatedCards: updatedCards,
  };
};

export const addCardHandler = (cards, newCard) => {
  const card = { ...newCard };
  card.Number = uuidv4();
  console.log(actionTypes.ADD_CARD_HANDLER, cards, newCard);
  return {
    type: actionTypes.ADD_CARD_HANDLER,
    updatedCards: [...cards, card],
  };
};
