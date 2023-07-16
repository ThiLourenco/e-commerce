'use client'

export function OrderItem() {
  return (
    <>
      <div className="bg-gray-0 relative mb-4 mt-16 overflow-x-auto rounded-lg border-2 border-gray-700 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:rounded-lg sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="ext-xs bg-gray-200  text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                N° Pedido
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                Rastreamento
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                #4619
              </th>
              <td className="whitespace-nowrap px-6 py-4">
                01 de Julho de 2023
              </td>
              <td className="whitespace-nowrap px-6 py-4">R$ 420,00 </td>
              <td className="whitespace-nowrap px-6 py-4">
                <a
                  href="https://rastreamento.correios.com.br/app/index.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-yellow-400">
                Pendente
              </td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                #4196
              </th>
              <td className="whitespace-nowrap px-6 py-4">
                02 de Julho de 2023
              </td>
              <td className="whitespace-nowrap px-6 py-4">R$ 520,00 </td>
              <td className="whitespace-nowrap px-6 py-4">
                <a
                  href="https://rastreamento.correios.com.br/app/index.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-green-300">
                Entregue
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
