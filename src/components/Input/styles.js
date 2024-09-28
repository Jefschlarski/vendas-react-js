import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${props => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${props => (props.error ? 'red' : '#007BFF')};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
