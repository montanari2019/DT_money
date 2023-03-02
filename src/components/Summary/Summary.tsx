import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from "phosphor-react";
import { useSummary } from "../../hooks/useSymmary";
import { priceFromatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styled";

export function Summary() {
  const summary = useSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFromatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>- {priceFromatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#00b37e" />
        </header>

        <strong>{priceFromatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
