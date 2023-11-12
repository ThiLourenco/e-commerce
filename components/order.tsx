'use client'

import { Session } from 'next-auth'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useGetOrders } from 'hooks/useGetUsers'
import { OrdersItemEmpty } from './orders-items-empty'
import { IsOrderLoading } from './orders-isLoading'
import OrderRow from './OrderRow'

interface IGetOrders {
  session: Session
}

const OrderList: React.FC<IGetOrders> = ({ session }) => {
  const pathname = usePathname()
  const { orders, isLoading } = useGetOrders(session.user?.email!)
  const isOnHomePage = pathname !== '/'
  const hasOrders =
    Array.isArray(orders) &&
    orders.some((order) => session.user?.email === order.email)

  if (isLoading) return <IsOrderLoading />
  if (!hasOrders) return <OrdersItemEmpty />

  return (
    <div className="overflow-x-auto overflow-y-auto rounded-md">
      <table className="w-full text-left text-sm text-gray-500 transition-shadow dark:text-gray-400">
        <thead className="bg-gray-200 p-4 px-6 text-base text-gray-800 shadow dark:bg-gray-800 dark:text-gray-400">
          <tr>
            <th className="py-5 sm:px-6 ">Pedido</th>
            <th className="py-5 sm:px-6">Data</th>
            <th className="py-5 sm:px-6">Valor</th>
            <th className="py-5 sm:px-6">Rastreio</th>
            <th className="py-5 sm:px-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            if (isOnHomePage && session.user?.email === order.email) {
              return <OrderRow key={order.id} order={order} />
            } else {
              return null
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OrderList
