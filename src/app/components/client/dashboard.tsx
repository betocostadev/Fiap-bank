import { IClient } from '@/@types/Client'
import { useClients } from '@/hooks/useClients'
import useGetBalance from '@/hooks/useGetBalance'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Statements from './statements'
import Actions from './actions'

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
      <section className="flex flex-col">
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
        <Actions id={userId} />
        <Statements id={userId} />
      </section>
    </div>
  )
}
