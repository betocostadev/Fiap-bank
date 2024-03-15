import { createContext, Dispatch, SetStateAction } from 'react'

type Client = { name: string; id: string }

interface ClientsContextType {
  clients: Client[]
  setClients: Dispatch<SetStateAction<Client[]>>
}

const ClientsContext = createContext<ClientsContextType>({
  clients: [],
  setClients: () => {},
})

export default ClientsContext
