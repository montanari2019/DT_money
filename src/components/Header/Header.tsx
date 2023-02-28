import { ButtonNewTransation, HeaderContainer, HeaderContent } from "./styled";
import { X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/Logo.svg";
import { NewTransactionModal } from "../NewTransactionModal/Index";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTransation>Nova Transação</ButtonNewTransation>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
