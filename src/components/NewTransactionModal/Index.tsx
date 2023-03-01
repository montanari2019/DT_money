import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styled";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={20} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />
  
          <TransactionType>

            <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24}/>
                Entrada
            </TransactionTypeButton>

            <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24} />
                Saida
            </TransactionTypeButton>
         
          </TransactionType>

         
          <button type="submit">Cadastro</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
