import { createContext, ReactNode, useEffect, useState } from "react";
import { BaseUrl } from "../../services/Api";

interface transactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContextTypes {
  transactions: transactionsProps[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionsContextTypes);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    
  const [transactions, setTransactions] = useState<transactionsProps[]>([]);

  async function loadTransaction() {
    const response = await fetch(`${BaseUrl}transactions`);
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{transactions}}>
        {children}
    </TransactionContext.Provider>
  )
}
