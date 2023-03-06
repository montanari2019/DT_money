import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../../services/Api";

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
  fetchTransaction: (query?: string) => Promise<void>;
  CreateNewTransaction: (data: CreateNewTransactionProps) => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface CreateNewTransactionProps {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}

export const TransactionContext = createContext({} as TransactionsContextTypes);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<transactionsProps[]>([]);

  const fetchTransaction = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const CreateNewTransaction = useCallback(
    async (data: CreateNewTransactionProps) => {
      const { category, description, price, type } = data;
      const response = await api.post("transactions", {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [...state, response.data]);
    
    },[]);

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransaction, CreateNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
