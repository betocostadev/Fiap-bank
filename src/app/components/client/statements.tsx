import useStatements from '@/hooks/useStatements'
import { useEffect } from 'react'

export default function Statements({
  id,
  shouldRefetch,
}: {
  id: string
  shouldRefetch: boolean
}) {
  const { fetchStatements, statements, loading } = useStatements()

  useEffect(() => {
    fetchStatements(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, statements.length, shouldRefetch])

  return (
    <div className="bg-white p-2 sm:p-4 rounded-md shadow w-full md:w-2/3 flex flex-col self-center dark:bg-gray-400">
      <h3 className="text-lg md:text-xl mb-4 font-bold text-center text-black dark:text-white">
        TRANSACTIONS
      </h3>
      {loading && <p className="text-black dark:text-white">Loading...</p>}
      <table className="table-auto w-full text-black text-center dark:text-white">
        <thead>
          <tr className="text-left md:text-center">
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {statements.map((statement) => (
            <tr
              key={statement.id}
              className="text-left md:text-center text-sm md:text-lg"
            >
              <td>{statement.date}</td>
              <td
                className={
                  statement.type === 'Deposit'
                    ? 'text-green-500 dark:text-green-300'
                    : 'text-red-500 dark:text-red-600'
                }
              >
                {statement.type}
              </td>
              <td className="flex justify-evenly">
                <span>{`${statement.type === 'Deposit' ? '➕' : '➖'}`}</span>
                <span>{statement.amount}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
