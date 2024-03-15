import { Balance } from '@/@types/Client'
import { getBalanceService } from '@/services/client'

import { useState } from 'react'

const useGetBalance = () => {
  const [balance, setBalance] = useState(0)
  const [overdraftLimit, setoverdraftLimit] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchBalance = async (id: string) => {
    const clientBalance: Balance | never[] = await getBalanceService(id)

    if (Array.isArray(clientBalance) || !clientBalance) {
      setLoading(false)
      return
    }
    setBalance(clientBalance.balance)
    setoverdraftLimit(clientBalance.overdraftLimit)
    setLoading(false)
    console.log(balance, overdraftLimit)
  }

  return { fetchBalance, balance, overdraftLimit, loading }
}

export default useGetBalance
