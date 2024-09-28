import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/useAuth";

function DashBoard() {
  const { signout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title> Administração </C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default DashBoard;