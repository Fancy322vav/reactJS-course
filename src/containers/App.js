import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import CardList from "../components/CardList";
import NewCard from "./NewCard";
import Modal from "../components/UI/Modal";
import CardContextProvider from "../context/CardContext";
import HeaderButtons from "../components/Header/HeaderButtons";
import Header from "../components/Header";

const StyledCheckbox = styled.input`
  cursor: pointer;
`;

class App extends Component {
  state = {
    isOnlyViewMode: false,
    showAddingCard: false,
  };

  onlyViewModeToggle = () => {
    this.setState({ isOnlyViewMode: !this.state.isOnlyViewMode });
  };

  showAddingCardHandler = () => {
    this.setState({ showAddingCard: true });
  };

  closeAddingCardHandler = () => {
    this.setState({ showAddingCard: false });
  };

  render() {
    let newCard = (
      <Modal
        show={this.state.showAddingCard}
        onClose={this.closeAddingCardHandler}
      >
        <NewCard
          onAdd={this.addCardHandler}
          onClose={this.closeAddingCardHandler}
        />
      </Modal>
    );
    if (this.state.isOnlyViewMode) {
      newCard = null;
    }
    return (
      <CardContextProvider>
        <div>
          <Header />
          <div className="container">
            <div className="view-mode">
              <p>Только просмотр</p>
              <StyledCheckbox
                type="checkbox"
                onChange={this.onlyViewModeToggle}
              />
            </div>
            <HeaderButtons
              isOnlyView={this.state.isOnlyViewMode}
              viewModeToggle={this.state.onlyViewModeToggle}
              onShow={this.showAddingCardHandler}
            />
          </div>
          {newCard}
          <CardList isOnlyView={this.state.isOnlyViewMode} />
        </div>
      </CardContextProvider>
    );
  }
}

export default App;
