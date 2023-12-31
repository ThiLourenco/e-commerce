'use client'

import { useRouter } from 'next/navigation'
import { Filter } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet'
import { ProductFilters } from '../components/product-filters'

const sortOptions = [
  { name: 'Lançamentos', value: '/products/?date=asc' },
  { name: 'Preço, crescente', value: '/products/?price=asc' },
  { name: 'Preço, decrescente', value: '/products/?price=desc' },
]

export function ProductSort() {
  const router = useRouter()

  return (
    <div className="flex items-center">
      <Select onValueChange={(value) => router.replace(value)}>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.name} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Sheet>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
            <SheetDescription>
              Limite sua pesquisa de produtos usando as opções abaixo.
            </SheetDescription>
          </SheetHeader>
          <ProductFilters />
        </SheetContent>
        <SheetTrigger className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
          <span className="sr-only">Filtros</span>
          <Filter className="h-5 w-5" aria-hidden="true" />
        </SheetTrigger>
      </Sheet>
    </div>
  )
}
