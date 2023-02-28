import { SearchForm } from "./components/SearchForm/SearchForm";
import { PriceHighLight, TableTransationsContainer, TransationsTable } from "./styled";

export function TableTransations() {
  return (
    <TableTransationsContainer>
        <SearchForm/>
      <TransationsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de sites</td>
            <td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>13/12/2022</td>
          </tr>

          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighLight variant="outcome">-R$ 50,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>25/12/2022</td>
          </tr>

          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighLight variant="outcome">-R$ 50,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>25/12/2022</td>
          </tr>

          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighLight variant="outcome">-R$ 50,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>25/12/2022</td>
          </tr>

          
        </tbody>

        
      </TransationsTable>
    </TableTransationsContainer>
  );
}
