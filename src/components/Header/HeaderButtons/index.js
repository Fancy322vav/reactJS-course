import React from "react";
import BtnSuccess from "../../UI/Buttons/BtnSuccess";
import BtnDanger from "../../UI/Buttons/BtnDanger";
import "./index.css";

const headerButtons = (props) => {
  return (
    <div className="container_buttons">
      <BtnSuccess
        size={{ height: "40px" }}
        onSuccess={props.onShow}
        isDisabled={props.isOnlyView}
      >
        Добавить карточку
      </BtnSuccess>
      <BtnDanger
        size={{ height: "40px" }}
        onDanger={props.onDeleteCardsHandler}
        isDisabled={props.isOnlyView}
      >
        Удалить выбранные карточки
      </BtnDanger>
    </div>
  );
};

export default headerButtons;
