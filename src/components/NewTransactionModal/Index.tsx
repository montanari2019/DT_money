import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from "./styled";
import { useContext } from "react";
import { TransactionContext } from "../../context/Transactions";

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  type: zod.enum(["income", "outcome"]),
  category: zod.string(),
  price: zod.number(),
});


type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const { register, handleSubmit, formState:{isSubmitting}, control, reset } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  const { CreateNewTransaction } = useContext(TransactionContext)

  async function handleCreateNewTransaction(data: NewTransactionFormInputs){
    await CreateNewTransaction(data)
    reset()
    
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={20} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder="Descrição" 
            {...register('description')}
            required />
          <input 
            type="number" 
            placeholder="Preço" 
            {...register("price", {valueAsNumber: true})}
            required />
          <input 
            type="text" 
            placeholder="Categoria" 
            {...register('category')}
            required />

         <Controller
          control={control}
          name="type"
          render={({field})=>{
            // console.log(field)
            return(
              <TransactionType onValueChange={(field.onChange)} >
              <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>
  
              <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24} />
                Saida
              </TransactionTypeButton>
            </TransactionType>
            )
          }}
         />

          <button type="submit" disabled={isSubmitting}>Cadastro</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
