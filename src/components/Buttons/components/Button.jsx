import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Buttons.module.css";

const Buttons = (props) => {
  return (
    <>
      <button
        id={props.id}
        className={`${styles.buttons} ${styles[props.type]} ${styles[props.size]}`}
        style={props.styles}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.text}
        </button>
    </>
  );
};

export default memo(Buttons);

Buttons.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf([ "small","medium", "large"]),
  text: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  styles: PropTypes.any,
};

Buttons.defaultProps = {
    type: "primary",
    size: "medium",
    text: "",
    disabled: false,
  }