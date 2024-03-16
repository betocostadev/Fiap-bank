import { IClient } from '@/@types/Client'
import { useClients } from '@/hooks/useClients'
import useGetBalance from '@/hooks/useGetBalance'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Statements from './statements'
import Actions from './actions'
import { useRouter } from 'next/navigation'

export default function Dashboard({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(true)
  const [client, setClient] = useState<IClient>({ id: 'none', name: 'Friend' })
  const [dropdown, setDropdown] = useState(false)
  const [shouldRefecth, setShouldRefetch] = useState(false)
  const { clients } = useClients()
  const router = useRouter()

  const {
    fetchBalance,
    balance,
    overdraftLimit,
    loading: loadingBalance,
  } = useGetBalance()

  useEffect(() => {
    fetchBalance(userId)
    if (clients.length) {
      setClient(clients.find((client) => client.id === userId) || clients[0])
    }
    setLoading(false)
    setShouldRefetch(false)
  }, [clients, client, fetchBalance, shouldRefecth, userId])

  const exitBank = () => {
    router.push('/', { scroll: false })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <section className="flex flex-col">
        <div className="flex flex-col my-2">
          <div className="flex justify-start items-center">
            <button onClick={() => setDropdown(!dropdown)}>
              <Image
                className="rounded-full"
                width="48"
                height="48"
                src="/img/placeholders/avatar.jpeg"
                alt={`avatar`}
              />
            </button>
            <h2 className="text-lg md:text-2xl text-black ml-2 dark:text-white">{`Hello, ${client.name}`}</h2>
          </div>
          {dropdown && (
            <div
              id="dropdown"
              className="z-10 absolute mt-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-500"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <button
                    className="py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-lg"
                    onClick={exitBank}
                  >
                    ⬅️ Exit
                  </button>
                </li>
              </ul>
            </div>
          )}
          <div className="flex justify-end">
            <span className="text-md md:text-xl text-black dark:text-white">
              Account balance
            </span>
            {loading || loadingBalance ? (
              <span className="text-lg ml-2 font-bold text-black">
                loading...
              </span>
            ) : (
              <div>
                <span
                  className={`text-lg ml-2 font-bold ${
                    balance >= 0 ? 'text-black dark:text-white' : 'text-red-500'
                  }`}
                >
                  {`BRL ${balance}`}
                </span>
                <span
                  className={`text-lg ml-2 font-bold ${
                    overdraftLimit <= 0 ? 'text-red-500' : 'text-blue-500'
                  }`}
                >
                  {` (${overdraftLimit <= 0 ? '-' : ''}${overdraftLimit})`}
                </span>
              </div>
            )}
          </div>
        </div>
        <Actions id={userId} setRefetch={setShouldRefetch} />
        <Statements id={userId} shouldRefetch={shouldRefecth} />
      </section>
    </div>
  )
}
