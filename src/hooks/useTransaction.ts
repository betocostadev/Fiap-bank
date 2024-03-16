import { useMemo } from 'react'
import { Transaction } from '@/@types/Statements'

const useTransaction = () => {
  const convertTransaction = useMemo(
    () => (transactionData: Transaction) => {
      if (!transactionData) return console.error('No transaction data')

      const { amount, date, id, type } = transactionData
      const newDate = new Date(date)
      const formattedDate = newDate.toLocaleDateString('pt-BR')
      const formattedAmount = amount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      const formattedType = type === 0 ? 'Deposit' : 'Withdraw'

      return {
        id,
        date: formattedDate,
        amount: formattedAmount,
        type: formattedType,
      }
    },
    []
  ) // Add the dependencies here

  return { convertTransaction }
}

export default useTransaction
