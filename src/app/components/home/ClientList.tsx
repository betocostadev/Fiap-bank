import ClientListItem from './ClientListItem'
import useClients from '@/hooks/useClients'

export default function ClientList() {
  const { clients, loading } = useClients()

  if (loading) {
    return <p>Loading clients...</p>
  }

  return (
    <div>
      <section>
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {!clients.length && <p>No clients found</p>}
          {clients.map((client) => (
            <ClientListItem key={client.id} id={client.id} name={client.name} />
          ))}
        </ul>
      </section>
    </div>
  )
}
