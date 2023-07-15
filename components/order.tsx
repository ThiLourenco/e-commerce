'use client'

export function OrderItem() {
  return (
    <>
      <div
        aria-labelledby="summary-heading"
        className="mb-4 mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
      >
        <h2 id="summary-heading" className="text-lg font-medium">
          <p>ID do Pedido: #46199271460087</p>
          <p>Data: 01 de julho de 2023</p>
          <p>Valor Total: R$ 420,00</p>
          <p>Status do pedido: Pendente</p>
        </h2>
      </div>
    </>
  )
}
