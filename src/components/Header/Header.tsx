import { ButtonNewTransation, HeaderContainer, HeaderContent } from "./styled";

import logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <ButtonNewTransation>Nova Transação</ButtonNewTransation>
      </HeaderContent>
    </HeaderContainer>
  );
}
