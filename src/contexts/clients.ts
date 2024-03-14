import { createContext } from 'react'

type Client = { name: string; id: string }

const ClientsContext = createContext({
  clients: [] as Client[],
  setClients: (clients: Client[]) => {},
})

export default ClientsContext
