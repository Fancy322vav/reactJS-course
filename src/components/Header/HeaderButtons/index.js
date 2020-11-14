import React from "react";
import BtnSuccess from "../../UI/Buttons/BtnSuccess";
import BtnDanger from "../../UI/Buttons/BtnDanger";
import "./index.css";
import { useSelector } from "react-redux";

const headerButtons = (props) => {
  const viewMode = useSelector((state) => state.isOnlyViewMode);

  return (
    <div className="container_buttons">
      <BtnSuccess
        size={{ height: "40px" }}
        onSuccess={props.onShow}
        isDisabled={viewMode}
      >
        Добавить карточку
      </BtnSuccess>
      <BtnDanger
        size={{ height: "40px" }}
        onDanger={props.onDeleteCardsHandler}
        isDisabled={viewMode}
      >
        Удалить выбранные карточки
      </BtnDanger>
    </div>
  );
};

export default headerButtons;
