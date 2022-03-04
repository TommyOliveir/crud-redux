import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  width: 180px;
  height: 2.8rem;
  /* box-shadow: inset 0px 1px 0px 0px green; */
  /* background-color: ${(props) => props.backgroundColor}; */
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "green"};
  border-radius: 5px;
  border: 1px solid green;
  display: inline-block;
  cursor: pointer;
  color: ${(props) => (props.variant === "outline" ? "green" : "#FFF")};
  font-family: Arial;
  font-size: 0.8;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  /* margin-top: 10px;  */
 

  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "green"};
    color: ${(props) => (props.variant !== "outline" ? "green" : "#FFF")};
  }
  &:hover {
  }
`;

export const FancyButton = styled(StyledButton)`
  background-color: #337ab7;
  border: solid 1px #337ab7;
  width: 99.3%;
  padding: 0px;
  &:hover {
    color: #337ab7;
    -webkit-box-shadow: 1px 0px 3px 1px  #337ab7;
    box-shadow: 1px 0px 3px 1px  #337ab7;
  }
`;

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "green"};
  }
`;

const rotate = keyframes`
from {
  transform: rotate()(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

export const Darkbutton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
  &:hover {
    color: ${(props) => props.theme.light.text};
  }
`;

export const Deletebutton = styled(StyledButton)`
  border: 1px solid #ed4d3d;
  background-color: #ed4d3d;
  color: #fff;
  &:hover {
    color: #ed4d3d;
  }
`;
