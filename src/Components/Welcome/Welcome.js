import { render } from "@testing-library/react";
import React from "react";
import SwingLogo from "../SwingLogo/SwingLogo";
import Typography from "@material-ui/core/Typography";
import { Background, Wrapper, Subtitle } from "../styled-components";

const BgImage = "/assets/images/cover_photo_2.jpg";

function Welcome(props) {
  render();
  return (
    <>
        <Wrapper>
          <Wrapper>
            <Typography variant="h3" style={{ textAlign: "center", color: "rgb(24, 47, 69)"}}>
              {props.name}
            </Typography>
          </Wrapper>
          <SwingLogo />
        </Wrapper>
      <Background BgImage={BgImage} Repeat="no-repeat" width="100%">
      </Background>
      <Wrapper bgColor="rgb(234, 239, 244)">
        <Subtitle>
          Custom, handcrafted, porch swings. Made with love in Grayson GA
        </Subtitle>
      </Wrapper>
    </>
  );
}

export default Welcome;
