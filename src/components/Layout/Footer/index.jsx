import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Meu Aplicativo. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
