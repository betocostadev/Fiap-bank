import { depositService, withdrawService } from '@/services/client'
import { useEffect, useState } from 'react'

const useBanking = (initial: 0) => {
  const [withdrawAmount, setWithdrawAmount] = useState(0)
  const [withdrawError, setWithdrawError] = useState(false)
  const [depositAmount, setDepositAmount] = useState(0)
  const [depositError, setDepositError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setWithdrawAmount(initial)
    setDepositAmount(initial)
    setWithdrawError(false)
    setDepositError(false)
  }, [initial])

  const handleChange = (e: any) => {
    let { value, name, type } = e.target

    if (type === 'number' && typeof value === 'string') {
      if (name === 'withdraw') setWithdrawError(true)
      else setDepositError(true)
    }

    if (type === 'number') {
      if (value === '') {
        value = 0
      }
      value = parseInt(value)
    }

    if (name === 'withdraw') {
      setWithdrawAmount(value)
      setWithdrawError(false)
    } else {
      setDepositAmount(value)
      setDepositError(false)
    }
  }

  const resetWithdraw = () => {
    setWithdrawAmount(0)
  }

  const resetDeposit = () => {
    setDepositAmount(0)
  }

  const submitWithdraw = async (id: string) => {
    setLoading(true)

    const data = {
      amount: withdrawAmount,
      id,
    }
    const withdraw = await withdrawService(data)

    console.log('withdraw hook', withdraw)

    setLoading(false)

    return
  }

  const submitDeposit = async (id: string) => {
    setLoading(true)

    const data = {
      amount: depositAmount,
      id,
    }
    const deposit = await depositService(data)

    console.log('deposit hook', deposit)

    setLoading(false)

    return
  }

  return {
    withdrawAmount,
    withdrawError,
    depositAmount,
    depositError,
    handleChange,
    resetWithdraw,
    resetDeposit,
    submitWithdraw,
    submitDeposit,
    loading,
  }
}

export default useBanking
