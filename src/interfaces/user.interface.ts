export interface IUser {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
  birth_date: string
  description: string
  type_user: string
  address: IAddress
}

export interface IAddress {
  id: number
  cep: string
  state: string
  city: string
  road: string
  number: string
  complement: string
}
