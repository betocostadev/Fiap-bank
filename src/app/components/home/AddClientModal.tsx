import useAddClient from '@/hooks/useAddClient'
import useForm from '@/hooks/useForm'
import { MouseEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddClientModal({
  showModal,
  hideModal,
}: {
  showModal: boolean
  hideModal: () => void
}) {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
  })
  const [isError, setIsError] = useState(false)

  const router = useRouter()
  const addClient = useAddClient()
  // const setClient = useSetClient()

  if (!showModal) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e)
    setIsError(false)
  }

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!inputs.name) {
      setIsError(true)
      return
    }

    const newClient = await addClient(inputs.name)
    resetForm()
    hideModal()

    if (newClient) {
      // setClient({ name: newClient.name, id: newClient.id })
      router.push(`/client/${newClient.id}`, { scroll: false })
    }
  }

  return (
    <div
      id="add-client-modal"
      tabIndex={-1}
      z-index="100"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-start w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Create a new client
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="add-client-modal"
              onClick={hideModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Client name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="John Doe"
                  required
                  value={inputs.name}
                  onChange={handleInputChange}
                />
                {isError && (
                  <p className="pt-1 text-xs text-red-500 dark:text-red-400">
                    Name is required
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) =>
                  handleSubmit(
                    e as unknown as MouseEvent<HTMLButtonElement, MouseEvent>
                  )
                }
              >
                Create client
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
