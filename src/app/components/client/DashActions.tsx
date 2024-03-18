import useBanking from '@/hooks/useBanking'
import useToast from '@/hooks/useToast'
import { Dispatch, SetStateAction } from 'react'
import DashActionField from './DashActionField'

export default function DashActions({
  id,
  setRefetch,
}: {
  id: string
  setRefetch: Dispatch<SetStateAction<boolean>>
}) {
  const {
    withdrawAmount,
    withdrawError,
    depositAmount,
    depositError,
    handleChange,
    submitWithdraw,
    submitDeposit,
    resetWithdraw,
    resetDeposit,
    loading,
  } = useBanking('')

  const { toastSuccess, toastError } = useToast()

  const btnDisabled = (type = 'deposit'): boolean => {
    const selection = type === 'deposit' ? depositAmount : withdrawAmount
    const inputError = type === 'deposit' ? depositError : withdrawError
    return (
      loading ||
      (typeof selection === 'number' && selection <= 0) ||
      selection === '' ||
      inputError === true
    )
  }

  const handleBanking = async (type: string) => {
    if (type === 'withdraw') {
      const result = await submitWithdraw(id)
      if (result === false) {
        toastError('Insufficient funds')
        return
      }
      resetWithdraw()
      setRefetch(true)
      toastSuccess('Withdrawal successful')
    } else {
      const result = await submitDeposit(id)
      if (result === false) {
        toastError('Error depositing funds')
        return
      }
      resetDeposit()
      setRefetch(true)
      toastSuccess('Deposit Successful')
    }
  }

  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 mb-8">
      <DashActionField
        label="Withdraw"
        actionType="withdraw"
        value={withdrawAmount}
        handleChange={handleChange}
        handleBanking={handleBanking}
        btnDisabled={btnDisabled}
      />
      <DashActionField
        label="Deposit"
        actionType="deposit"
        value={depositAmount}
        handleChange={handleChange}
        handleBanking={handleBanking}
        btnDisabled={btnDisabled}
      />
    </div>
  )
}
