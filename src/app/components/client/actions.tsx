import useBanking from '@/hooks/useBanking'

export default function Actions({ id }: { id: string }) {
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
  } = useBanking(0)

  const handleBanking = async (type: string) => {
    if (type === 'withdraw') {
      await submitWithdraw(id)
      resetWithdraw()
    } else {
      await submitDeposit(id)
      resetDeposit()
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-white p-4 rounded-md shadow">
        <div className="flex items-center space-x-2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="withdraw"
            >
              Withdraw
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="withdraw"
              name="withdraw"
              type="number"
              placeholder="0"
              value={withdrawAmount}
              onChange={handleChange}
            />
          </div>

          <button
            className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onChange={() => handleBanking('withdraw')}
            disabled={loading || withdrawAmount === 0 || withdrawError}
          >
            Withdraw
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow">
        <div className="flex items-center space-x-2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deposit"
            >
              Deposit
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="deposit"
              name="deposit"
              type="number"
              placeholder="0"
              value={depositAmount}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            disabled={loading || depositAmount === 0 || depositError}
            onClick={() => handleBanking('deposit')}
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  )
}
