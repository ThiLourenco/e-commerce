import { useQuery } from '@tanstack/react-query'
import { services } from 'services/api'

export const useGetOrders = (email: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['order', email],
    queryFn: () => services.getOrders(),
    initialData: {
      data: [],
    },
  })

  return {
    orders: data,
    isLoading,
  }
}
