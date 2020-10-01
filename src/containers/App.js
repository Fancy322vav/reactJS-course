import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import CardList from "../components/CardList";

const StyledCheckbox = styled.input`
  cursor: pointer;
`;

class App extends Component {
  state = {
    cards: [
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
    ],
    isOnlyViewMode: false,
  };

  onlyViewModeToggle = () => {
    this.setState({ isOnlyViewMode: !this.state.isOnlyViewMode });
  };

  editModeEnabled = (id) => {
    const updatedCards = [...this.state.cards];
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
    this.setState({ cards: updatedCards });
  };

  deleteCardsHandler = () => {
    let updatedCards = [...this.state.cards].filter((card) => !card.isChecked);
    this.setState({ cards: updatedCards });
  };

  cardCheckedHandler = (id) => {
    const updatedCards = [...this.state.cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedCard,
      isChecked: !updatedCards[cardIndex].isChecked,
    };
    updatedCards[cardIndex] = updatedCard;
    this.setState({ cards: updatedCards });
  };

  saveChanges = (id, updatedTempCard) => {
    const updatedCards = [...this.state.cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedTempCard,
      isEditMode: false,
    };
    updatedCards[cardIndex] = updatedCard;
    this.setState({ cards: updatedCards });
  };

  cancelChanges = (id) => {
    const updatedCards = [...this.state.cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard.isEditMode = false;
    updatedCards[cardIndex] = updatedCard;
    this.setState({ cards: updatedCards });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Course</h1>
        </header>
        <div className="container">
          <div className="view-mode">
            <p>Только просмотр</p>
            <StyledCheckbox
              type="checkbox"
              onChange={this.onlyViewModeToggle}
            />
          </div>
          <button
            onClick={this.deleteCardsHandler}
            disabled={this.state.isOnlyViewMode}
            className="delete"
          >
            Удалить выбранные карточки
          </button>
        </div>
        <CardList
          cards={this.state.cards}
          isOnlyView={this.state.isOnlyViewMode}
          onCheck={this.cardCheckedHandler}
          onSave={this.saveChanges}
          onCancel={this.cancelChanges}
          onEdit={this.editModeEnabled}
        />
      </div>
    );
  }
}

export default App;
