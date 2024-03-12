import ClientListItem from './ClientListItem'
import useGetClients from '@/hooks/useGetClients'

export default function ClientList() {
  const { clients, loading } = useGetClients()

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
