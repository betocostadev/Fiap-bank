export interface IClient {
  id: string
  name: string
  chekingAccount: ChekingAccount
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
