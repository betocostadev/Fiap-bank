import useStatements from '@/hooks/useStatements'
import { useEffect } from 'react'

export default function Statements({ id }: { id: string }) {
  const { fetchStatements, loading } = useStatements()

  useEffect(() => {
    fetchStatements(id)
  }, [fetchStatements, id])

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h3 className="text-2xl mb-4 font-bold">TRANSACTIONS</h3>
      <table className="table-auto w-full text-black">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>14/03/2024 - 19:20hs</td>
            <td>Withdraw</td>
            <td className="text-red-500">- 1100</td>
            <td>3900</td>
          </tr>
          <tr>
            <td># 3462</td>
            <td>Deposit</td>
            <td className="text-green-500">+ 100,92</td>
            <td>4000,92</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
