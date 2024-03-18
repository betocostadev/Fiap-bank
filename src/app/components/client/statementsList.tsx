import { Statements, Transaction } from '@/@types/Statements'

export default function StatementsList({
  statements,
}: {
  statements: Statements[] | Transaction[]
}) {
  return (
    <div>
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
