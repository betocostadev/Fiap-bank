import useStatements from '@/hooks/useStatements'
import { useEffect } from 'react'
import StatementsList from './StatementsList'

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
      {!loading && statements.length > 0 && (
        <StatementsList statements={statements} />
      )}
    </div>
  )
}
