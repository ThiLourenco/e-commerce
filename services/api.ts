import axios from 'axios'

interface IAPIOrderDTO {
  id: string
  paymentIntentId: string
  created: number
  amount: number
  email: string
  name: string
  status: string
}

interface IGetOrders {
  data: IAPIOrderDTO[]
}

const api = axios.create({
  baseURL: '/',
})

class APIService {
  getOrders = async () => {
    const { data } = await api.get<IGetOrders>(`/api/getWebHookData`)
    return data
  }
}

export const services = new APIService()
