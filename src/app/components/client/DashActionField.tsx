import { ChangeEvent } from 'react'

type ActionFieldProps = {
  label: string
  actionType: string
  value: string | number
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleBanking: (action: string) => void
  btnDisabled: (action: string) => boolean
}

export default function DashActionField({
  label,
  actionType,
  value,
  handleChange,
  handleBanking,
  btnDisabled,
}: ActionFieldProps) {
  return (
    <div className="bg-white p-4 rounded-md shadow dark:bg-gray-400">
      <div className="flex items-center justify-center space-x-2">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
            htmlFor={actionType}
          >
            {label}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-200"
            id={actionType}
            name={actionType}
            type="number"
            placeholder="0"
            value={value}
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-2 border border-blue-500 hover:border-transparent hover:cursor-pointer rounded self-center dark:text-white disabled:opacity-50"
          onClick={() => handleBanking(actionType)}
          disabled={btnDisabled(actionType)}
        >
          {label}
        </button>
      </div>
    </div>
  )
}
