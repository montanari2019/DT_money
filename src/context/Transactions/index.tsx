import { createContext, ReactNode, useEffect, useState } from "react";
import { api, BaseUrl } from "../../services/Api";

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
  fetchTransaction: (query?:string) => Promise<void>
  CreateNewTransaction: (data:CreateNewTransactionProps) => void
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface CreateNewTransactionProps{
  description: string,
  type: "income" |"outcome"
  category: string
  price: number;

}

export const TransactionContext = createContext({} as TransactionsContextTypes);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    
  const [transactions, setTransactions] = useState<transactionsProps[]>([]);

  async function fetchTransaction(query?:string) {

    const response = await api.get("transactions", {
      params:{
        q: query
      }
    })

    setTransactions(response.data);
  }

  async function CreateNewTransaction(data:CreateNewTransactionProps) {

    const { category, description, price, type } = data
    const response = await api.post("transactions", {
        description,
        category,
        price,
        type,
        createdAt: new Date()
    })

    setTransactions(state =>[...state, response.data])
    
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{transactions, fetchTransaction, CreateNewTransaction}}>
        {children}
    </TransactionContext.Provider>
  )
}
