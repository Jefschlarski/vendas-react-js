import React from "react";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Layout from "../../components/Layout";

function Home() {
  const { user } = useAuth();
  return (
    <Layout>
      <C.Container>
        <C.Title>Olá {user.name} </C.Title>    
      </C.Container>
    </Layout>
  );
};

export default Home;