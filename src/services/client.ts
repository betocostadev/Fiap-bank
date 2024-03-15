import { IBalanceResponse, IStatementsResponse } from '@/@types/Client'
import { baseUrl } from '@/utils/config'

export const getBalanceService = async (id: string) => {
  const response = await fetch(`${baseUrl}/balances/${id}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    redirect: 'follow',
    referrerPolicy: 'origin',
  })
  const { data }: IBalanceResponse = await response.json()

  return data ? data : []
}

export const getStatementsService = async (id: string) => {
  const response = await fetch(`${baseUrl}/statements/${id}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    redirect: 'follow',
    referrerPolicy: 'origin',
  })
  const { data }: IStatementsResponse = await response.json()

  return data
}
