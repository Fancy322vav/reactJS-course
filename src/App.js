import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
  state = {
    cards: [
      { id: "1", head: "Card 1", body: "This is the card 1" },
      { id: "2", head: "Card 2", body: "This is the card 2" },
      { id: "3", head: "Card 3", body: "This is the card 3" },
      { id: "4", head: "Card 4", body: "This is the card 4" },
      { id: "5", head: "Card 5", body: "This is the card 5" },
      { id: "6", head: "Card 6", body: "This is the card 6" },
      { id: "7", head: "Card 7", body: "This is the card 7" },
    ],
    isOnlyViewMode: false,
  };

  onlyViewModeToggle = () => {
    this.setState({ isOnlyViewMode: !this.state.isOnlyViewMode });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Course</h1>
        </header>
        <div className="view-mode">
          <p>Только просмотр</p>
          <input type="checkbox" onChange={this.onlyViewModeToggle} />
        </div>
        <div className="card-list">
          {this.state.cards.map((card) => {
            return (
              <div className="card-size" key={card.id}>
                <Card
                  head={card.head}
                  body={card.body}
                  viewMode={this.state.isOnlyViewMode}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
