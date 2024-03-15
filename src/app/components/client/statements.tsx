import useStatements from '@/hooks/useStatements'
import { useEffect, useState } from 'react'

export default function Statements({ id }: { id: string }) {
  const { fetchStatements, statements, loading } = useStatements()

  useEffect(() => {
    fetchStatements(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, statements.length])

  return (
    <div className="bg-white p-4 rounded-md shadow w-full">
      <h3 className="text-2xl mb-4 font-bold">TRANSACTIONS</h3>
      {loading && <p>Loading...</p>}
      <table className="table-auto w-full text-black">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {statements.map((statement) => (
            <tr key={statement.id}>
              <td>{statement.date}</td>
              <td
                className={
                  statement.type === 'Deposit'
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              >
                {statement.type}
              </td>
              <td>{statement.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
