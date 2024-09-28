import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../Button';
import { HeaderContainer } from './styles';

const Header = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <h1>Olá!! {user ? user.name : ''}</h1>
      <Button BackGroundColor='#e50429' Width='100px' Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
      </Button>
    </HeaderContainer>
  );
};

export default Header;