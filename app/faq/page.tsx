import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default async function Page() {
  return (
    <main className="flex-1 px-6 xs:py-24 sm:py-32 lg:px-8 ">
      <h1 className="mx-auto max-w-6xl text-center text-4xl font-extrabold -tracking-tight">
        Perguntas frequentes
      </h1>
      <div className="mx-auto max-w-6xl px-4 pt-20 text-justify">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger value="item-1">Pergunta 1</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pretium fringilla justo nec imperdiet. Duis at convallis lorem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger value="item-2">Pergunta 2</AccordionTrigger>
            <AccordionContent>
              Aenean nisl nulla, semper nec risus et, molestie efficitur eros.
              Sed non tortor et magna mattis ullamcorper lacinia nec nisi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger value="item-3">Pergunta 3</AccordionTrigger>
            <AccordionContent>
              Aenean nisl nulla, semper nec risus et, molestie efficitur eros.
              Sed non tortor et magna mattis ullamcorper lacinia nec nisi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger value="item-4">Pergunta 4</AccordionTrigger>
            <AccordionContent>
              Aenean nisl nulla, semper nec risus et, molestie efficitur eros.
              Sed non tortor et magna mattis ullamcorper lacinia nec nisi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger value="item-5">Pergunta 5</AccordionTrigger>
            <AccordionContent>
              Aenean nisl nulla, semper nec risus et, molestie efficitur eros.
              Sed non tortor et magna mattis ullamcorper lacinia nec nisi.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}
