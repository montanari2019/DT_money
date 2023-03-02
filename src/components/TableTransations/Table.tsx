import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../context/Transactions";
import { BaseUrl } from "../../services/Api";
import { dateFromatter, priceFromatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { PriceHighLight, TableTransationsContainer, TransationsTable } from "./styled";



export function TableTransations() {

  const { transactions } = useContext(TransactionContext)
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
