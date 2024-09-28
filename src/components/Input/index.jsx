import * as C from './styles';

const Input = ({ type, placeholder, value, onChange, error, errorMessage }) => {
  return (
    <C.InputContainer>
      <C.StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error ? 'true' : undefined}
      />
      {error && <C.ErrorMessage>{errorMessage}</C.ErrorMessage>}
    </C.InputContainer>
  );
};

export default Input;