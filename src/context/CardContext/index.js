import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      head: "Card 1",
      body: "This is the card 1",
      isChecked: false,
      isEditMode: false,
    },
    {
      id: "2",
      head: "Card 2",
      body: "This is the card 2",
      isChecked: false,
      isEditMode: false,
    },
    {
      id: "3",
      head: "Card 3",
      body: "This is the card 3",
      isChecked: false,
      isEditMode: false,
    },
    {
      id: "4",
      head: "Card 4",
      body: "This is the card 4",
      isChecked: false,
      isEditMode: false,
    },
    {
      id: "5",
      head: "Card 5",
      body: "This is the card 5",
      isChecked: false,
      isEditMode: false,
    },
    {
      id: "6",
      head: "Card 6",
      body: "This is the card 6",
      isChecked: false,
      isEditMode: false,
    },
    {
      id: "7",
      head: "Card 7",
      body: "This is the card 7",
      isChecked: false,
      isEditMode: false,
    },
  ]);

  const showNumberOfCards = () => {
    return cards.length;
  };

  const deleteCardsHandler = () => {
    const updatedCards = [...cards].filter((card) => !card.isChecked);
    setCards(updatedCards);
  };

  const addCardHandler = (newCard) => {
    const card = { ...newCard };
    card.id = uuidv4();
    setCards([...cards, card]);
  };

  const cardCheckedHandler = (id) => {
    const updatedCards = [...cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedCard,
      isChecked: !updatedCards[cardIndex].isChecked,
    };
    updatedCards[cardIndex] = updatedCard;
    setCards(updatedCards);
  };

  const editModeEnabled = (id) => {
    const updatedCards = [...cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedCard,
      isChecked: false,
      isEditMode: true,
    };
    updatedCards[cardIndex] = updatedCard;
    setCards(updatedCards);
  };

  const saveChanges = (id, updatedTempCard) => {
    const updatedCards = [...cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedTempCard,
      isEditMode: false,
    };
    updatedCards[cardIndex] = updatedCard;
    setCards(updatedCards);
  };

  const cancelChanges = (id) => {
    const updatedCards = [...cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard.isEditMode = false;
    updatedCards[cardIndex] = updatedCard;
    setCards(updatedCards);
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        cardCheckedHandler,
        editModeEnabled,
        saveChanges,
        cancelChanges,
        deleteCardsHandler,
        addCardHandler,
        showNumberOfCards,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
