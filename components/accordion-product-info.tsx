import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'

import { SanityProduct } from '../config/inventory'

interface Props {
  product: SanityProduct
}

export default function InformationProduct({ product }: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger value="item-1">Composição</AccordionTrigger>
        <AccordionContent>{product.composition}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger value="item-2">Informação Adicional</AccordionTrigger>
        <AccordionContent>{product.additionalInformation}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
