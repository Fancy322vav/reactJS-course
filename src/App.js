import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Course</h1>
        </header>
        <Card header="Card 1">Some random text</Card>
      </div>
    );
  }
}

export default App;
