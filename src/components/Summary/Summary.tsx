import { ArrowCircleUp, CurrencyDollar , ArrowCircleDown} from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styled";

 
export function Summary() {
  return (
    <SummaryContainer>

      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>R$ 1.259,00 </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#00b37e" />
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
       
    </SummaryContainer>
  );
}
