import React, { useEffect } from "react";
import { BsPencil, BsCheck, BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/actions";
import "./index.css";

export const cardHeader = (props) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const view = useSelector((state) => state.isOnlyViewMode);

  useEffect(() => {
    props.onCancel();
  }, [view]);

  let pencil = null;
  if (!view) {
    pencil = (
      <BsPencil
        className="right"
        onClick={() => dispatch(actions.editModeEnabled(cards, props.id))}
      />
    );
  }

  return (
    <div className="card-header">
      {!props.editMode ? (
        <div>
          <p className="header-text">{props.cardHead}</p>
          <input
            className="right"
            id="check"
            type="checkbox"
            checked={props.checked}
            onClick={() =>
              dispatch(actions.cardCheckedHandler(cards, props.id))
            }
          />
          {pencil}
        </div>
      ) : (
        <div>
          <input
            type="text"
            className="updated-header"
            value={props.tempHead}
            onChange={props.onChange}
          />
          <BsX className="right" onClick={props.onCancel} />
          <BsCheck className="right" onClick={props.onSave} />
        </div>
      )}
    </div>
  );
};

cardHeader.propTypes = {
  view: PropTypes.bool,
  cardHead: PropTypes.string,
  editMode: PropTypes.bool,
  id: PropTypes.string,
  checked: PropTypes.bool,
  tempHead: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

export default cardHeader;
