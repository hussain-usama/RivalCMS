import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Buttons.module.css";
import Button from '@mui/material/Button';

const IconeButton = (props) => {
  return (
    <div className={`${styles.buttons} ${styles[props.type]}`} style={{padding:'1px 5px',...props.styles}}>
      <Button startIcon={props.icon} onClick={props.onClick}>
          {props.text}
      </Button>
    </div>
  );
};

export default memo(IconeButton);

IconeButton.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary","tertiary"]),
  size: PropTypes.oneOf([ "small","medium", "large"]),
  text: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  styles: PropTypes.any,
  icon: PropTypes.any,
};
