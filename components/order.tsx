import React from 'react'
interface Order {
  id: number
  orderNumber: string
  date: string
  value: string
  trackingLink: string
  status: string
}

interface OrderListProps {
  orders: Order[]
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto">
      <table className=" text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-200 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-400">
          <tr>
            <th className="px-3 py-2 sm:px-6">Pedido</th>
            <th className="px-3 py-2 sm:px-6">Data</th>
            <th className="px-3 py-2 sm:px-6">Valor</th>
            <th className="px-3 py-2 sm:px-6">Rastreamento</th>
            <th className="px-3 py-2 sm:px-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:hover:bg-gray-600"
            >
              <td className="whitespace-nowrap px-3 py-2 font-medium text-gray-900 dark:text-gray-50 sm:px-6">
                #{order.orderNumber}
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-gray-900 dark:text-gray-50 sm:px-6">
                {order.date}
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-gray-900 dark:text-gray-50 sm:px-6">
                {order.value}
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-gray-900 hover:underline-offset-1 dark:text-gray-50 sm:px-6">
                {order.trackingLink ? (
                  <a
                    href={order.trackingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline-offset-1"
                  >
                    Consultar
                  </a>
                ) : (
                  <span>-</span>
                )}
              </td>
              <td
                className={`whitespace-nowrap px-3 py-2 sm:px-6 ${
                  order.status === 'Pendente'
                    ? 'text-yellow-400'
                    : order.status === 'Entregue'
                    ? 'text-green-400'
                    : ''
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderList
