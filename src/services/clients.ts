import { IClientResponse } from '@/@types/Client'
import { baseUrl } from '@/app/utils/config'

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
