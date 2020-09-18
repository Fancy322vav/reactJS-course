import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Course</h1>
        </header>
        <div className="card-size">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
