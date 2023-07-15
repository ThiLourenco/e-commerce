'use client'

export function OrderSummary() {
  return (
    <>
      <div
        aria-labelledby="summary-heading"
        className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
      >
        <div id="summary-heading" className="text-lg font-medium">
          <p>Óculos de sol Brooks</p>
          <p>Preço: R$ 420,00</p>

          <br />

          <p>Image</p>
        </div>
      </div>
    </>
  )
}
