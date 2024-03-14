import { addClientService } from '@/services/clients'

const useAddClient = () => {
  const addClient = async (name: string) => {
    const data = {
      name,
    }
    const client = await addClientService(data)

    return client.data
  }

  return addClient
}

export default useAddClient
