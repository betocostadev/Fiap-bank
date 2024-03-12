import { IClientResponse } from '@/@types/Client'
import { baseUrl } from '@/utils/config'

export const getClientsService = async (url = `${baseUrl}/clientes`) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    redirect: 'follow',
    referrerPolicy: 'origin',
  })
  const { data }: IClientResponse = await response.json()

  return data ? data : []
}

type AddClientData = {
  name: string
}

export const addClientService = async (data: AddClientData) => {
  const response = await fetch(`${baseUrl}/clientes`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    redirect: 'follow',
    referrerPolicy: 'origin',
  })

  const result = await response.json()

  return result
}
