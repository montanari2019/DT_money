
import { TransactionContext } from "../../context/Transactions";

import { dateFromatter, priceFromatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { PriceHighLight, TableTransationsContainer, TransationsTable } from "./styled";
import {useContextSelector} from "use-context-selector"



export function TableTransations() {

  const transactions = useContextSelector(TransactionContext, (context) =>{
    return context.transactions
  })
  return (
    <TableTransationsContainer>
        <SearchForm/>
      <TransationsTable>
        <tbody>

          {transactions.map(index =>{
            return(
              <tr key={index.id}>
              <td width="50%">{index.description}</td>
              <td>
                <PriceHighLight variant={index.type}>
                  {
                    index.type === "outcome" && "- "
                  }
                
                  {priceFromatter.format(index.price)}
                </PriceHighLight>
              </td>
              <td>{index.category}</td>
              <td>{dateFromatter.format(new Date(index.createdAt))}</td>
            </tr>
            )
          })}

          
        </tbody>

        
      </TransationsTable>
    </TableTransationsContainer>
  );
}
