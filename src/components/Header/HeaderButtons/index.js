import React, { useContext } from "react";
import BtnSuccess from "../../UI/Buttons/BtnSuccess";
import BtnDanger from "../../UI/Buttons/BtnDanger";
import { CardContext } from "../../../context/CardContext";
import "./index.css";

const headerButtons = (props) => {
  const { deleteCardsHandler } = useContext(CardContext);

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
        onDanger={deleteCardsHandler}
        isDisabled={props.isOnlyView}
      >
        Удалить выбранные карточки
      </BtnDanger>
    </div>
  );
};

export default headerButtons;
