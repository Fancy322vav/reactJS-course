import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import NewCard from "./NewCard";
import Modal from "../components/UI/Modal";
import HeaderButtons from "../components/Header/HeaderButtons";
import CardsCounter from "../components/UI/CardsCounter";
import * as actions from "../redux/actions/actions";

class App extends Component {
  state = {
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
          <HeaderButtons
            onShow={this.showAddingCardHandler}
            onDeleteCardsHandler={() =>
              this.props.onDeleteCardsHandler(this.props.cards)
            }
          />
        </div>
        {newCard}
        <CardList cards={this.props.cards} />
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
    onDeleteCardsHandler: (cards) =>
      dispatch(actions.deleteCardsHandler(cards)),
    onAddCardHandler: (cards, newCard) =>
      dispatch(actions.addCardHandler(cards, newCard)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
