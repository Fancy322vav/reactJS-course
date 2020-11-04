import React, { useEffect } from "react";
import { BsPencil, BsCheck, BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/actions";
import "./index.css";

const cardHeader = (props) => {
  useEffect(() => {
    props.onCancel();
  }, [props.view]);

  let pencil = null;
  if (!props.view) {
    pencil = (
      <BsPencil
        className="right"
        onClick={() => props.onEditModeEnabled(props.cards, props.id)}
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
            onClick={() => props.onCardCheckedHandler(props.cards, props.id)}
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

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCardCheckedHandler: (cards, id) =>
      dispatch(actions.cardCheckedHandler(cards, id)),
    onEditModeEnabled: (cards, id) =>
      dispatch(actions.editModeEnabled(cards, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cardHeader);
