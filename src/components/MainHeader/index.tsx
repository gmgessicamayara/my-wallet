import { useMemo } from "react";
import { Container, Profile, Welcome, UserName } from "./style";

import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Hello,{emoji}</Welcome>
        <UserName>Géssica Mendonça</UserName>
      </Profile>
    </Container>
  );
};
export default MainHeader;
