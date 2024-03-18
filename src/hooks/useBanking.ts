import { depositService, withdrawService } from '@/services/client'
import { useEffect, useState } from 'react'

const useBanking = (initial: '') => {
  const [withdrawAmount, setWithdrawAmount] = useState<string | number>('')
  const [withdrawError, setWithdrawError] = useState(false)
  const [depositAmount, setDepositAmount] = useState<string | number>('')
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
      if (value === '' || value < 0) {
        if (name === 'withdraw') setWithdrawError(true)
        else setDepositError(true)
      }
      value = Number(value)
    }

    if (name === 'withdraw') {
      setWithdrawAmount(Number(value))
      setWithdrawError(false)
    } else {
      setDepositAmount(value)
      setDepositError(false)
    }
  }

  const resetWithdraw = () => {
    setWithdrawAmount('')
  }

  const resetDeposit = () => {
    setDepositAmount('')
  }

  const submitWithdraw = async (id: string) => {
    setLoading(true)

    const data = {
      amount: Number(withdrawAmount),
      id,
    }
    const withdraw = await withdrawService(data)

    setLoading(false)

    return withdraw
  }

  const submitDeposit = async (id: string) => {
    setLoading(true)

    const data = {
      amount: Number(depositAmount),
      id,
    }
    const deposit = await depositService(data)

    setLoading(false)

    return deposit
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
