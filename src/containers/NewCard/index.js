import React, { Component } from "react";
import BtnSuccess from "../../components/UI/Buttons/BtnSuccess";
import BtnDanger from "../../components/UI/Buttons/BtnDanger";
import "./index.css";

class NewCard extends Component {
  state = {
    card: {
      id: "",
      head: "",
      body: "",
      isChecked: false,
      isEditMode: false,
    },
  };

  inputChangedHandler = (event, property) => {
    const newCard = { ...this.state.card };
    newCard[property] = event.target.value;
    this.setState({ card: newCard });
  };

  render() {
    return (
      <div className="add-card">
        <p className="add-card-item">Добавить карточку</p>
        <div className="add-item">
          <p>Заголовок карточки</p>
          <input
            type="text"
            placeholder="Введите заголовок"
            onChange={(event) => this.inputChangedHandler(event, "head")}
          />
        </div>
        <div className="add-item">
          <p>Текст карточки</p>
          <input
            type="text"
            placeholder="Введите текст"
            onChange={(event) => this.inputChangedHandler(event, "body")}
          />
        </div>
        <div className="buttons">
          <BtnSuccess
            size={{ height: "30px" }}
            onSuccess={() => this.props.onAdd(this.state.card)}
          >
            Добавить
          </BtnSuccess>
          <BtnDanger size={{ height: "30px" }} onDanger={this.props.onClose}>
            Завершить
          </BtnDanger>
        </div>
      </div>
    );
  }
}

export default NewCard;
