import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import NewCard from "./NewCard";
import Modal from "../components/UI/Modal";
import HeaderButtons from "../components/Header/HeaderButtons";
import CardsCounter from "../components/UI/CardsCounter";
import * as actions from "../redux/actions/actions";

const StyledCheckbox = styled.input`
  cursor: pointer;
`;

class App extends Component {
  state = {
    isOnlyViewMode: false,
    showAddingCard: false,
  };

  componentDidMount() {
    this.props.onInitCards();
  }

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
          cards={this.props.cards}
          onAddCardHandler={this.props.onAddCardHandler}
          onAdd={this.addCardHandler}
          onClose={this.closeAddingCardHandler}
        />
      </Modal>
    );
    if (this.state.isOnlyViewMode) {
      newCard = null;
    }
    return (
      <div>
        <CardsCounter cards={this.props.cards} />
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
            onDeleteCardsHandler={() =>
              this.props.onDeleteCardsHandler(this.props.cards)
            }
          />
        </div>
        {newCard}
        <CardList
          isOnlyView={this.state.isOnlyViewMode}
          cards={this.props.cards}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCards: () => dispatch(actions.initCards()),
    onDeleteCardsHandler: (cards) =>
      dispatch(actions.deleteCardsHandler(cards)),
    onAddCardHandler: (cards, newCard) =>
      dispatch(actions.addCardHandler(cards, newCard)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
