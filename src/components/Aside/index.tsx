import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from "./style";
import logoImg from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo My Wallet" />
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="#">
        <MdArrowDownward />
          Money IN
        </MenuItemLink>

        <MenuItemLink href="#">
         
          <MdArrowUpward />
          Money OUT
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Logout
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};
export default Aside;
