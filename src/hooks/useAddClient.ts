import { AddClientPayload } from '@/@types/Client'
import { addClientService } from '@/services/clients'

const useAddClient = () => {
  const addClient = async ({
    name,
    initialBalance,
    overdraftLimit,
  }: AddClientPayload) => {
    const data = {
      name,
      initialBalance: initialBalance || 0,
      overdraftLimit: overdraftLimit || 0,
    }
    const client = await addClientService(data)

    return client.data
  }

  return addClient
}

export default useAddClient
