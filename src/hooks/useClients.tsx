import ClientsContext from '@/contexts/clients'
import { useContext } from 'react'

export function useClients() {
  return useContext(ClientsContext)
}

export function useSetClients() {
  const { setClients } = useContext(ClientsContext)
  return setClients
}
