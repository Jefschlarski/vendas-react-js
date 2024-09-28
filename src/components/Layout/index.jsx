import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LayoutContainer, MainContent, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Sidebar />
        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
