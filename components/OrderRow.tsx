'use client'

import React from 'react'
import { formatCurrencyString } from 'use-shopping-cart'
import { formatCurrencyDate } from 'utils/date-format'
import { formatId } from 'utils/formatId'

interface Order {
  id: string
  created: number
  amount: number
  status: string
}

interface OrderRowProps {
  order: Order
}

const OrderRow = ({ order }: OrderRowProps) => (
  <tr
    key={order.id}
    className="rounded-lg bg-transparent shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:hover:bg-gray-600"
  >
    <td className="whitespace-nowrap px-3 py-5 font-medium text-gray-900 dark:text-gray-50 sm:px-6">
      {formatId(order.id)}
    </td>
    <td className="whitespace-nowrap px-3 py-5 text-gray-900 dark:text-gray-50 sm:px-6">
      {formatCurrencyDate(order.created)}
    </td>
    <td className="whitespace-nowrap px-3 py-5 text-gray-900 dark:text-gray-50 sm:px-6">
      {formatCurrencyString({
        currency: 'BRL',
        value: order.amount,
      })}
    </td>
    <td className="whitespace-nowrap px-3 py-5 text-gray-900 hover:underline-offset-1 dark:text-gray-50 sm:px-6">
      <a
        href="https://example.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:underline-offset-1"
      >
        Consultar
      </a>
    </td>
    <td
      className={`whitespace-nowrap px-3 py-2 sm:px-6 ${
        order.status === 'started'
          ? 'text-yellow-400'
          : order.status === 'succeeded'
          ? 'text-green-400'
          : 'text-gray-900 dark:text-gray-50'
      }`}
    >
      {order.status === 'succeeded' ? 'Aprovado' : order.status}
    </td>
  </tr>
)

export default OrderRow
