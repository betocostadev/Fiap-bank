export interface IStatementsResponse {
  success: boolean
  message: string
  data: Statements[]
}

export type Statements = {
  id: string
  amount: number
  date: string
  type: string
}

export type Transaction = {
  id: string
  date: string
  amount: number
  type: number
}
