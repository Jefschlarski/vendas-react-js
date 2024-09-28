import * as C from "./styles";

function Button({ Text, onClick, Type = "button", Width = "100%", BackGroundColor = "#046ee5" }) {
    return (
      <C.Button width={Width} backgroundcolor={BackGroundColor} type={Type} onClick={onClick}>
        {Text}
      </C.Button>
    );
  };

export default Button