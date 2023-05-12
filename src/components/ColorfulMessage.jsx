import React from "react";

export const ColorfulMessage = (props) => {
  // console.log(props);
  const { color, children } = props;
  const contentStyle = {
    color,
    FontSize: "18px"
  };

  return <p styel={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
