import React from "react";

const Text = (props) => {
  const style = {
    fontSize: props.size,
    color: props.color,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
    fontFamily: props.fontFamily,
    lineHeight: props.lineHeight,
  };

  return (
    <span style={style} {...props}>
      {props.children}
    </span>
  );
};


Text.defaultProps = {
  size: "15px",
  fontWeight: 500,
  fontStyle: "normal",
  color: "",
  className: "",
  lineHeight: "15px",
  fontFamily: " ",
};

export default Text;
