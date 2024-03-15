import { Statements, Transaction } from '@/@types/Statements'
import { getStatementsService } from '@/services/client'

import { useState } from 'react'
import useTransaction from './useTransaction'

const useStatements = () => {
  const [statements, setStatements] = useState<Statements[] | Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const { convertTransaction } = useTransaction()

  const fetchStatements = async (id: string) => {
    const clientStatements: Statements[] = await getStatementsService(id)

    if (clientStatements.length) {
      const transactions = clientStatements.map((statement) => {
        return convertTransaction(statement as any)
      })

      setStatements(transactions as unknown as Transaction[])
      setLoading(false)
    }
  }

  return { fetchStatements, statements, loading }
}

export default useStatements
