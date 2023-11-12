'use client'

export function IsOrderLoading() {
  return (
    <div className="flex h-[250px] shrink-0 w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
      <div className="text-center text-sm text-gray-500 transition-shadow dark:text-gray-400">
        <h3 className="mb-4 text-lg font-semibold">Carregando...</h3>
      </div>
    </div>
  )
}
