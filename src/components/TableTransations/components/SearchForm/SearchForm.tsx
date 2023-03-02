import { SearchFormContainer } from "./styled";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormsSchema = zod.object({
  query: zod.string(),
}) 

type SearchFormInputs = zod.infer<typeof searchFormsSchema>

export function SearchForm() {

  const { register, handleSubmit, formState:{isSubmitting} } = useForm<SearchFormInputs>({

    resolver: zodResolver(searchFormsSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs){
    await new Promise(resolve => setTimeout(resolve, 2000 ))
    console.log(data)
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
