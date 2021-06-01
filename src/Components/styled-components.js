import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) =>  props.BgImage});
  background-repeat: ${(props) =>  props.Repeat};
  width: ${(props) =>  props.width}; 
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>  props.bgColor};
`;

export const Subtitle = styled.h2`
text-align: center;
color: rgb(24, 47, 69);
`