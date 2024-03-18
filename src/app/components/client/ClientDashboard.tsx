import { IClient } from '@/@types/Client'
import { useClients } from '@/hooks/useClients'
import useGetBalance from '@/hooks/useGetBalance'
import { useEffect, useState } from 'react'
import Statements from './statements'
import DashboardAvatar from './DashboardAvatar'
import Actions from './Actions'

export default function ClientDashboard({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(true)
  const [client, setClient] = useState<IClient>({ id: 'none', name: 'Friend' })
  const [shouldRefecth, setShouldRefetch] = useState(false)
  const { clients } = useClients()

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

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <section className="flex flex-col">
        <div className="flex flex-col my-2">
          <DashboardAvatar clientName={client.name} />
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
