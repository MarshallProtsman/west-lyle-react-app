import { render } from "@testing-library/react";
import React from "react";
// import cover_photo_2 from "../../assets/images"

function Welcome(props) {
  render();
  return (
  <>
    <h1>Hello, {props.name}</h1>
    <img
      src="https://res.cloudinary.com/dxf0lgyn4/image/upload/v1614824113/West%20Lyle%20Swing%20Co/106918503_113340910436531_5904251814667356885_n_yf18rt.jpg"
      alt="cover"
    ></img>
  </>
  );
}

export default Welcome;
