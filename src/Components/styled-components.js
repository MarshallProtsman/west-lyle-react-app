import styled from "styled-components";

const Background = styled.div`
  /* background-image: url(${process.env.PUBLIC_URL + "./src/assets/images/cover_photo_2.jpg"}); */
  background-image: url(${props => props.BgImage}});
  background-repeat: "no-repeat";
  width: "250px";
`;

export default Background;
