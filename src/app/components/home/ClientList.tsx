import { useClients, useSetClients } from '@/hooks/useClients'
import ClientListItem from './ClientListItem'
import useGetClients from '@/hooks/useGetClients'
import { useEffect } from 'react'

export default function ClientList() {
  const { clients: fetchedClients, loading } = useGetClients()
  const { clients } = useClients()
  const setClients = useSetClients()

  useEffect(() => {
    if (fetchedClients.length) {
      setClients(fetchedClients)
    }
  }, [fetchedClients, setClients])

  if (loading) {
    return <p>Loading clients...</p>
  }

  return (
    <div>
      <section>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!clients.length && <p>No clients found</p>}
          {clients.map((client) => (
            <ClientListItem key={client.id} id={client.id} name={client.name} />
          ))}
        </ul>
      </section>
    </div>
  )
}
