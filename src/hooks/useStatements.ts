import { Statements } from '@/@types/Client'
import { getStatementsService } from '@/services/client'

import { useState } from 'react'

const useStatements = () => {
  const [statements, setStatements] = useState<Statements[]>([])
  const [loading, setLoading] = useState(true)

  const fetchStatements = async (id: string) => {
    const clientStatements: Statements[] = await getStatementsService(id)
    console.log('clientStatements', clientStatements)

    if (Array.isArray(clientStatements) || !clientStatements) {
      return
    }
    setStatements(clientStatements)
    setLoading(false)
  }

  return { fetchStatements, loading }
}

export default useStatements
