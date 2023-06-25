'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'

const filters = [
  {
    id: 'category',
    name: 'Categorias',
    options: [
      { value: 'bolsas', label: 'Bolsas' },
      { value: 'cintos', label: 'Cintos' },
      { value: 'luvas', label: 'Luvas' },
      { value: 'lencos', label: 'Lenços' },
      { value: 'carteiras', label: 'Carteiras' },
      { value: 'oculos', label: 'Óculos' },
    ],
  },
  {
    id: 'size',
    name: 'Tamanhos',
    options: [
      { value: 'p', label: 'Pequeno' },
      { value: 'm', label: 'Médio' },
      { value: 'g', label: 'Grande' },
      { value: 'gg', label: 'X-Grande' },
      { value: 'unico', label: 'Único' },
    ],
  },
  {
    id: 'color',
    name: 'Cores',
    options: [
      { value: 'preto', label: 'Preto' },
      { value: 'azul', label: 'Azul' },
      { value: 'marrom', label: 'Marrom' },
      { value: 'verde', label: 'Verde' },
      { value: 'amarelo', label: 'Amarelo' },
    ],
  },
]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValues = Array.from(searchParams.entries())

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{' '}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id)
                    ? `(${searchParams.get(section.id)})`
                    : ''}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      checked={searchValues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value,
                      )}
                      id={`filter-${section.id}-${optionIdx}`}
                      onClick={(event) => {
                        const params = new URLSearchParams(
                          searchParams.toString(),
                        )
                        const checked =
                          event.currentTarget.dataset.state === 'checked'
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value)
                        router.replace(`/?${params.toString()}`)
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
