import styled, { keyframes } from "styled-components";

export const StyledInput = styled.input`
  width: 95%;
  height: 2rem;
  font-size: 1rem;
 
  padding: 6px 15px;
  border-radius: 5px;
  border:solid 0px;
  &:focus {
    outline: none !important;
    border-radius: 5px;
    border-color: green;
    -webkit-box-shadow: 1px 0px 3px 1px  #337ab7;
    box-shadow: 1px 0px 3px 1px  #337ab7;
    transition: border-color 0.3s ease-in-out;
  }
`;

export const NewInput = styled(StyledInput)`
  border: 1px solid grey;
  &:focus {
    outline: none !important;
    border-radius: 5px;
    border-color: green;
    /* -webkit-box-shadow: 1px 0px 3px 1px #3c8c1d; */
    /* box-shadow: 1px 0px 3px 1px #3c8c1d; */
    transition: border-color 0.3s ease-in-out;
  }
`;
