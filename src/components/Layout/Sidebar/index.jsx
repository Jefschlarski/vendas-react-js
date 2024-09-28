import Anchor from '../../Anchor';
import { SidebarContainer } from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Anchor url="/home">Home</Anchor>
        <Anchor url="/admin">Admin</Anchor>
        <Anchor url="/admin/users">User</Anchor>
    </SidebarContainer>
  );
};

export default Sidebar;
