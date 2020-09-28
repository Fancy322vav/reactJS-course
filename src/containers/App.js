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
    tempCards: [
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

  deleteCardsHandler = () => {
    let updatedCards = [...this.state.cards];
    for (let i = updatedCards.length - 1; i >= 0; i--) {
      if (updatedCards[i].isChecked) {
        updatedCards.splice(i, 1);
      }
    }
    this.setState({ cards: updatedCards });
  };

  inputChangedHandler = (event, property, index) => {
    const updatedTempCards = [...this.state.tempCards];
    updatedTempCards[index][property] = event.target.value;
    this.setState({ tempCards: updatedTempCards });
  };

  cardCheckedHandler = (index) => {
    const updatedCards = [...this.state.cards];
    updatedCards[index].isChecked = !updatedCards[index].isChecked;
    this.setState({
      cards: updatedCards,
    });
  };

  editModeEnabled = (index) => {
    const updatedCards = [...this.state.cards];
    updatedCards[index].isChecked = false;
    updatedCards[index].isEditMode = true;
    this.setState({ cards: updatedCards });
  };

  saveChanges = (index) => {
    const updatedTempCards = [...this.state.tempCards];
    updatedTempCards[index].isEditMode = false;
    this.setState({ cards: updatedTempCards });
  };

  cancelChanges = (index) => {
    const updatedCards = [...this.state.cards];
    updatedCards[index].isEditMode = false;
    this.setState({ tempCards: updatedCards });
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
          <button onClick={this.deleteCardsHandler} className="delete">
            Удалить выбранные карточки
          </button>
        </div>
        <CardList
          cards={this.state.cards}
          tempCards={this.state.tempCards}
          isOnlyView={this.state.isOnlyViewMode}
          checkToggle={this.cardCheckedHandler}
          edit={this.editModeEnabled}
          save={this.saveChanges}
          cancel={this.cancelChanges}
          changed={this.inputChangedHandler}
        />
      </div>
    );
  }
}

export default App;
