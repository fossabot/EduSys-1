import React from "react";

const Button = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type == "primary" ? "button is-primary submit" : "button is-light submit"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
