import { render } from "@testing-library/react";
import React from "react";
import SwingLogo from "../SwingLogo/SwingLogo";
import Typography from "@material-ui/core/Typography";

function Welcome(props) {
  render();
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" style={{ }}>
          Welcome to {props.name}
        </Typography>
        <Typography variant="h5">{props.subtitle}</Typography>
      </div>
      <SwingLogo />
    </div>
  );
}

export default Welcome;
