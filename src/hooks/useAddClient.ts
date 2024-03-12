import { IClient } from '@/@types/Client'
import { addClientService } from '@/services/clients'
import { useState } from 'react'

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
