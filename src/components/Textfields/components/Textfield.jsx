import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Textfield.module.css";

const Textfield = (props) => {
  return (
    <>
      <input
        type={props.type}
        className={`${styles.textfield}`}
        style={{ width: props.width, height: props.height }}
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </>
  );
};

export default memo(Textfield);

Textfield.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.any,
  error: PropTypes.any
};
