import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f4; /* Fundo da página de admin */
`;

const Nav = styled.nav`
  margin-bottom: 20px;
`;

function AdminLayout({ children }) {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <Link to="/admin/users">Usuários</Link>
            <Link to="/admin/address">Endereços</Link>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </Nav>
      {children} {/* Renderiza o conteúdo das páginas filhas */}
    </Container>
  );
}

export default AdminLayout;
