import { IClient } from '@/@types/Client'
import { getClientsService } from '@/services/clients'
import { useEffect, useState } from 'react'

const useGetClients = () => {
  const [clients, setClients] = useState<IClient[]>([])
  const [loading, setLoading] = useState(true)

  const fetchClients = async () => {
    const clients = await getClientsService()
    if (clients) {
      setClients(clients)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  return { clients, loading }
}

export default useGetClients
