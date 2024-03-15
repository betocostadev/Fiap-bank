import { IBalanceResponse } from '@/@types/Client'
import { IStatementsResponse, WithdrawResponse } from '@/@types/Statements'
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

export const withdrawService = async ({
  amount,
  id,
}: {
  amount: number
  id: string
}) => {
  const response = await fetch(`${baseUrl}/withdraws/${id}`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
    redirect: 'follow',
    referrerPolicy: 'origin',
  })

  const { success }: WithdrawResponse = await response.json()

  return success ? success : false
}

export const depositService = async ({
  amount,
  id,
}: {
  amount: number
  id: string
}) => {
  const response = await fetch(`${baseUrl}/deposits/${id}`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
    redirect: 'follow',
    referrerPolicy: 'origin',
  })

  const { success }: WithdrawResponse = await response.json()

  return success ? success : false
}
