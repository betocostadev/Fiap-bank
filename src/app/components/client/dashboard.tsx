import { IClient } from '@/@types/Client'
import { useClients } from '@/hooks/useClients'
import useGetBalance from '@/hooks/useGetBalance'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Statements from './statements'

export default function Dashboard({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(true)
  const { clients } = useClients()
  const [client, setClient] = useState<IClient>({ id: 'none', name: 'Friend' })
  const {
    fetchBalance,
    balance,
    overdraftLimit,
    loading: loadingBalance,
  } = useGetBalance()

  useEffect(() => {
    fetchBalance(userId)
    console.log('Clients context: ', clients)
    if (clients.length) {
      setClient(clients.find((client) => client.id === userId) || clients[0])
      console.log(client)
    }
    setLoading(false)
  }, [clients, client, fetchBalance, userId])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <section>
        <div className="flex flex-col my-2">
          <div className="flex justify-start items-center">
            <Image
              className="rounded-full"
              width="48"
              height="48"
              src="/img/placeholders/avatar.jpeg"
              alt={`avatar`}
            />
            <h2 className="text-2xl text-black ml-2">{`Hello, ${client.name}`}</h2>
          </div>
          <div className="flex justify-end">
            <span className="text-lg text-black">Account balance</span>
            {loading || loadingBalance ? (
              <span className="text-lg ml-2 font-bold text-black">
                loading...
              </span>
            ) : (
              <div>
                <span
                  className={`text-lg ml-2 font-bold ${
                    balance >= 0 ? 'text-black' : 'text-red-500'
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
                  type="number"
                  placeholder="0"
                />
              </div>

              <button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
                  type="number"
                  placeholder="0"
                />
              </div>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Deposit
              </button>
            </div>
          </div>
        </div>
        <Statements id={userId} />
      </section>
    </div>
  )
}
