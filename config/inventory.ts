import { Image } from 'sanity'

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  composition: string
  additionalInformation: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, 'images'> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: '64da6006-a4bb-4555-af78-3467853eb75e',
    sku: 'canvas_tote_bag_1',
    name: 'Bolsa Tote de Lona',
    description: `Conheça sua nova bagagem de mão favorita. Nossa bolsa superdimensionada é feita em lona de algodão encerado durável, resistente e durável, ideal para transportar todas as suas coisas. Este tamanho leva você de e para o mercado do fazendeiro, a academia ou uma escapadela de fim de semana.`,
    price: 16800, // price in smallest currency unit (e.g. cent for USD)
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg',
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg',
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg',
    ],
    sizes: ['unico'],
    categories: ['bolsas'],
    colors: ['marrom'],
    currency: 'BRL',
    composition: '100% Poliuretano',
    additionalInformation: 'Altura: 34cm / Largura: 45cm / Profundidade: 12cm.',
  },
  {
    id: '8d1a33a5-5650-4bd7-bb70-ba4670090700',
    sku: 'khaki_tote_bag_1',
    name: 'Bolsa Caqui',
    description: `Conheça sua nova bagagem de mão favorita. Nossa bolsa superdimensionada é feita em lona de algodão encerado durável, resistente e durável, ideal para transportar todas as suas coisas. Este tamanho leva você de e para o mercado do fazendeiro, a academia ou uma escapadela de fim de semana.`,
    price: 14500,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg',
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-2.jpg',
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-3.jpg',
    ],
    sizes: ['unico'],
    categories: ['bolsas'],
    colors: ['azul'],
    currency: 'BRL',
    composition: '100% Poliamida.',
    additionalInformation: 'Altura: 34cm / Largura: 45cm / Profundidade: 12cm.',
  },
  {
    id: 'e882fe48-253c-40fb-8155-51b47b063c1a',
    sku: 'braided_leather_belt_1',
    name: 'Cinto de couro trançado',
    description: `Estes belos cintos de couro garantem a combinação de qualquer roupa. Eles são feitos de couro italiano curtido com vegetais, o que significa que eles têm altos e baixos de cor naturais e ficarão ainda melhores com o tempo.`,
    price: 4999,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg',
    ],
    sizes: ['p', 'm', 'g', 'gg'],
    categories: ['cintos'],
    colors: ['marrom'],
    currency: 'BRL',
    composition: 'Textura trançada de couro velho',
    additionalInformation: 'Design ajustável.',
  },
  {
    id: '6853a582-fc95-44af-9dac-dffbc694b47d',
    sku: 'woolblend_suit_belt_1',
    name: 'Cinto de terno de mistura de lã',
    description: `Este lindo cinto combina com qualquer roupa. Os materiais fortes irão assumir seus padrões de desgaste e ficarão ainda melhores com o tempo.`,
    price: 5599,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg',
    ],
    sizes: ['p', 'm', 'g', 'gg'],
    categories: ['cintos'],
    colors: ['preto'],
    currency: 'BRL',
    composition: 'Textura trançada de couro velho',
    additionalInformation: 'Design ajustável.',
  },
  {
    id: 'b5980fb9-142b-4e0b-9683-daac07827e0a',
    sku: 'wool_scarf_1',
    name: 'Cachecol de lã',
    description: `Feito com a melhor lã inglesa da fábrica Abraham Moon (fundada em 1837), este cachecol é uma adição elegante e aconchegante ao seu guarda-roupa de inverno.`,
    price: 6199,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg',
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-2.jpg',
    ],
    sizes: ['unico'],
    categories: ['cachecol'],
    colors: ['verde'],
    currency: 'BRL',
    composition: '94% lã, 6% seda',
    additionalInformation: 'Altura: 31 cm - Largura: 164 cm',
  },
  {
    id: '743b3855-6487-4d52-80fc-bcb8ca4fa74b',
    sku: 'leather_gloves_1',
    name: 'Luvas de couro',
    description: `O acessório de inverno mais inteligente... Estas luvas 100% forradas com caxemira apresentam pontas dos dedos amigas da tecnologia, para que você possa usar seu smartphone sem queimaduras.`,
    price: 9800,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg',
    ],
    sizes: ['p', 'm', 'g', 'gg'],
    categories: ['luvas'],
    colors: ['marrom'],
    currency: 'BRL',
    composition: '100% Couro',
    additionalInformation: 'xpto',
  },
  {
    id: '83ea928a-d834-4c6d-a588-4c93ec2de3c0',
    sku: 'down_mittens_1',
    name: 'Luvas Snow',
    description: `Fundada no Japão e agora com sede nos EUA, a Snow Peak fabrica equipamentos premium para atividades ao ar livre inspirados na região montanhosa de Niigata, no Japão, desde 1958. Fabricadas com materiais duráveis, essas luvas são isoladas com penas de pato para manter suas mãos aquecidas, não importa através qual vórtice polar o seu dia o leva.`,
    price: 13999,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg',
    ],
    sizes: ['p', 'm', 'g', 'gg'],
    categories: ['luvas'],
    colors: ['preto'],
    currency: 'BRL',
    composition: '100% Couro',
    additionalInformation: 'xpto',
  },
  {
    id: 'c5ef468d-d49e-4aa5-be5b-41f34af40b19',
    sku: 'brooks_sunglasses_1',
    name: 'Óculos de sol Brooks',
    description: `Estes são óculos de sol atemporais projetados na Califórnia e feitos à mão no Japão por mestres artesãos. As armações Brooks são feitas com ponte keyhole, um dos muitos detalhes que a marca inclui em sua construção.`,
    price: 42000,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg',
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-2.jpg',
    ],
    sizes: ['unico'],
    categories: ['oculos'],
    colors: ['amarelo'],
    currency: 'BRL',
    composition: 'Acetato 100%',
    additionalInformation: 'Produzido em: Estados Unidos',
  },
  {
    id: 'dd27c79d-97c3-47bb-9172-4ea74b096f6f',
    sku: 'dock_sunglasses_1',
    name: 'Óculos de sol CA',
    description: `Nossa mais recente coleção de óculos de sol feitos à mão apresenta detalhes como lentes com proteção UV em tonalidades escolhidas especificamente para complementar cada armação, e tudo a um preço que cabe no bolso. Fizemos estes óculos de sol com armações de acetato de inspiração vintage e uma ponte de fechadura.`,
    price: 5599,
    image:
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg',
    images: [
      'https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg',
    ],
    sizes: ['unico'],
    categories: ['oculos'],
    colors: ['preto'],
    currency: 'BRL',
    composition:
      ' Material da armação: Polipropileno - Material da Lente: Acrílico',
    additionalInformation:
      'Comprimento da Haste: 13,8cm - Altura da Lente: 4,8cm - Largura Total: 13,7cm - Largura da Lente: 5,5cm Vantagens das lentes polarizadas e proteção UV400',
  },
]
