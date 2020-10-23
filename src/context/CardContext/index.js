import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((res) => {
        let cards = res.data.slice(0, 15);
        cards = cards.map((card) => {
          return { ...card, isChecked: false, isEditMode: false };
        });
        setCards(cards);
      })
      .catch((error) => console.log(error));
  }, []);

  const showNumberOfCards = () => {
    return cards.length;
  };

  const deleteCardsHandler = () => {
    const updatedCards = [...cards].filter((card) => !card.isChecked);
    setCards(updatedCards);
  };

  const addCardHandler = (newCard) => {
    const card = { ...newCard };
    card.Number = uuidv4();
    setCards([...cards, card]);
  };

  const cardCheckedHandler = (id) => {
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
    setCards(updatedCards);
  };

  const editModeEnabled = (id) => {
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
    setCards(updatedCards);
  };

  const saveChanges = (id, updatedTempCard) => {
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
    setCards(updatedCards);
  };

  const cancelChanges = (id) => {
    const updatedCards = [...cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.Number === id;
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
