import { SearchFormContainer } from "./styled";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { TransactionContext } from "../../../../context/Transactions";

const searchFormsSchema = zod.object({
  query: zod.string(),
}) 

type SearchFormInputs = zod.infer<typeof searchFormsSchema>

export function SearchForm() {

  const { fetchTransaction } = useContext(TransactionContext)

  const { register, handleSubmit, formState:{isSubmitting} } = useForm<SearchFormInputs>({

    resolver: zodResolver(searchFormsSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs){
    await fetchTransaction(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
