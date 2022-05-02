import React from "react";
import PropTypes from "prop-types";

function CustomButton(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.display}
    </button>
  );
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  display: PropTypes.string
}

export default CustomButton;