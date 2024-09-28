import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.backgroundcolor && `background-color: ${props.backgroundcolor};`}
`;