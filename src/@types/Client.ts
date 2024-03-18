export interface IClient {
  id: string
  name: string
  chekingAccount?: ChekingAccount
}

export interface IClientResponse {
  data: IClient[]
  message: string
  success: boolean
}

type ChekingAccount = {
  balance: number
  overdraftLimit: number
}

export interface IBalanceResponse {
  success: boolean
  message: string
  data: Balance
}

export type Balance = {
  balance: number
  overdraftLimit: number
}

export interface AddClientPayload {
  name: string
  initialBalance: number
  overdraftLimit: number
}
