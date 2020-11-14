import React from "react";
import styled from "styled-components";
import * as actions from "../../redux/actions/actions";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";

const StyledCheckbox = styled.input`
  cursor: pointer;
`;

const settings = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.isOnlyViewMode);

  return (
    <div>
      <div className="view-mode">
        <h1>Settings: </h1>
        <p>Только просмотр</p>
        <StyledCheckbox
          type="checkbox"
          onChange={() => dispatch(actions.viewModeToggle(viewMode))}
          checked={viewMode}
        />
      </div>
    </div>
  );
};

export default settings;
