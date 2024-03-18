import useBanking from '@/hooks/useBanking'
import useToast from '@/hooks/useToast'
import { Dispatch, SetStateAction } from 'react'

export default function Actions({
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
      <div className="bg-white p-4 rounded-md shadow dark:bg-gray-400">
        <div className="flex items-center justify-center space-x-2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="withdraw"
            >
              Withdraw
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-200"
              id="withdraw"
              name="withdraw"
              type="number"
              placeholder="0"
              value={withdrawAmount}
              onChange={handleChange}
            />
          </div>

          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-2 border border-blue-500 hover:border-transparent hover:cursor-pointer rounded self-center dark:text-white disabled:opacity-50"
            onClick={() => handleBanking('withdraw')}
            disabled={btnDisabled('withdraw')}
          >
            Withdraw
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow dark:bg-gray-400">
        <div className="flex items-center justify-center space-x-2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="deposit"
            >
              Deposit
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-200"
              id="deposit"
              name="deposit"
              type="number"
              placeholder="0"
              value={depositAmount}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-2 border border-blue-500 hover:border-transparent hover:cursor-pointer rounded self-center dark:text-white disabled:opacity-50"
            disabled={btnDisabled('deposit')}
            onClick={() => handleBanking('deposit')}
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  )
}
