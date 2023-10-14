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
    composition:
      'Tecido principal: 100% - Poliéster. Forração: 100% - Poliéster. Acolchoamento: 100% - Poliéster. Palmas das Mãos: 100% - Poliéster. Cuff: 3% - Elastano97% - Poliéster. Revestimento: 100% - Poliuretano.',
    additionalInformation:
      'Estas luvas de ski integram uma membrana impermeável que consiste numa película polimérica muito fina, colocada entre o forro e a parte da luva que está em contato com o exterior. Esta membrana cria uma barreira à água e impermeabiliza o produto. Em complemento, os materiais exteriores do produto são submetidos a um tratamento de resistência à água que limita a absorção de água.Só as luvas de borracha são estanques. A estanquidade de uma luva com membrana em condições de humidade é limitada.',
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
      'Material da armação: Polipropileno - Material da Lente: Acrílico',
    additionalInformation:
      'Comprimento da Haste: 13,8cm - Altura da Lente: 4,8cm - Largura Total: 13,7cm - Largura da Lente: 5,5cm Vantagens das lentes polarizadas e proteção UV400',
  },
  {
    id: '7433650a-99da-4012-8287-a22860afc4b0',
    sku: 'camisa_1_preto',
    name: 'Camisa Lisa Tubular',
    description: `Camiseta masculina manga curta relaxed, uma opção moderna e confortável para o seu guarda-roupa. Desenvolvida em tecido de algodão lixado e amaciado, possui características únicas, como ótima transpiração, toque e leveza.`,
    price: 15090,
    image:
      'https://cdn.sanity.io/images/d2tfklso/production/fea423637e177f2e7e5b1d49ddf650fe3d4f5b2f-680x850.jpg',
    images: [
      'https://cdn.sanity.io/images/d2tfklso/production/fea423637e177f2e7e5b1d49ddf650fe3d4f5b2f-680x850.jpg',
    ],
    sizes: ['gg'],
    categories: ['camisas'],
    colors: ['preto'],
    currency: 'BRL',
    composition: 'Algodão',
    additionalInformation:
      'Conta com modelagem relaxed que oferece um caimento mais solto, proporcionando conforto e liberdade de movimento, além de ser uma escolha atual para o seu estilo.',
  },
  {
    id: '184d37b1-fbec-41c6-a6bf-125593dacd41',
    sku: 'camisa_1_preto',
    name: 'Camisa Preta Street',
    description: `Uma proposta descontraída com caimento estruturado que incorpora a estética urbana. Seu ajuste é intencionalmente grande, com mangas mais compridas e os benefícios essenciais Insider: maciez, propriedade termorreguladora, ação anti odor e não desbota. É um item para ser usado como masculino ou feminino, ultra versátil para diversas composições conforme a sua criatividade. `,
    price: 19900,
    image:
      'https://cdn.sanity.io/images/d2tfklso/production/2d4c615e3b754c79edef7b39db5d701b89fd483d-680x850.jpg',
    images: [
      'https://cdn.sanity.io/images/d2tfklso/production/92184a08c716f94e2ec31e0daf53302f539833f0-680x850.jpg',
    ],
    sizes: ['g', 'gg'],
    categories: ['camisas'],
    colors: ['preto'],
    currency: 'BRL',
    composition: '81% TENCEL™ Lyocell, 15% poliamida e 4% elastano',
    additionalInformation:
      'É um item para ser usado como masculino ou feminino, ultra versátil para diversas composições conforme a sua criatividade.',
  },
  {
    id: 'd9e0194c-62ce-4c82-8e67-9efe392960b8',
    sku: 'gorro-lenhador-hoshwear-preto',
    name: 'Gorro Lenhador Hoshwear Preto',
    description: `Uma proposta descontraída com caimento estruturado que incorpora a estética urbana. Seu ajuste é intencionalmente grande, com mangas mais compridas e os benefícios essenciais Insider: maciez, propriedade termorreguladora, ação anti odor e não desbota. É um item para ser usado como masculino ou feminino, ultra versátil para diversas composições conforme a sua criatividade. `,
    price: 8990,
    image:
      'https://cdn.sanity.io/images/d2tfklso/production/83d9932b5b3725b03a9d39a574231b776508634e-680x850.jpg',
    images: [
      'https://cdn.sanity.io/images/d2tfklso/production/83d9932b5b3725b03a9d39a574231b776508634e-680x850.jpg',
      'https://cdn.sanity.io/images/d2tfklso/production/bad94890f08054de77c5cd581135ed6fce2f1eb3-680x850.jpg',
    ],
    sizes: ['unico'],
    categories: ['gorros'],
    colors: ['preto'],
    currency: 'BRL',
    composition: 'Lã',
    additionalInformation: '- Testes e solidez obedecendo as normas ABNT.',
  },
  {
    id: '288fea00-5f24-4bc8-9170-167919772b19',
    sku: 'bone-palace-ripstop-preto',
    name: 'Boné Palace Ripstop Preto',
    description: `A Palace Skateboards é uma marca de skate e roupas com sede em Londres, fundada em 2009. A marca foi fundada por Levent Tanju e sua equipe de skate, o Palace Wayward Boys Choir. Palace se concentra em roupas de skate com influências pesadas dos anos 1990 e da cultura pop ao lado de anúncios de roupas no estilo VHS.`,
    price: 80090,
    image:
      'https://cdn.sanity.io/images/d2tfklso/production/2b4116e5c074d173a475149d4ad8bebe840e0aac-680x850.jpg',
    images: [
      'https://cdn.sanity.io/images/d2tfklso/production/2b4116e5c074d173a475149d4ad8bebe840e0aac-680x850.jpg',
      'https://cdn.sanity.io/images/d2tfklso/production/fcf623fac08fbe7d891b9f1a6f9473c261298d98-680x850.jpg',
    ],
    sizes: ['unico'],
    categories: ['bones'],
    colors: ['preto'],
    currency: 'BRL',
    composition: '67% Poliéster, 33% Algodão',
    additionalInformation: `
    Gênero: Unissex 
    Indicado Para: Casual`,
  },
  {
    id: 'be325fd2-166f-4a47-86cc-d2dd221d0bde',
    sku: 'bolsa-transversal-chanel-2-55-em-couro',
    name: 'Bolsa transversal Chanel 2.55 em couro',
    description: `Bolsa Chanel Quilted Perforated Leather Single Flap Jumbo 2006-2008, confeccionada em couro e ferragens prata. Modelo possui alça de ombro ou transversal, um bolso externo, compartimento único com fechamento por dispositivo de encaixe e aba, dois bolsos internos sendo um deles fechamento por zíper. Não acompanha dust bag.`,
    price: 2923150,
    image:
      'https://cdn.sanity.io/images/d2tfklso/production/b4ea362838dae50ed618f9b25209f47fe186c6e1-680x850.jpg',
    images: [
      'https://cdn.sanity.io/images/d2tfklso/production/b4ea362838dae50ed618f9b25209f47fe186c6e1-680x850.jpg',
      'https://cdn.sanity.io/images/d2tfklso/production/7500dee61d05a062fca4599084c025566a83b6d8-680x850.jpg',
    ],
    sizes: ['unico'],
    categories: ['bolsas'],
    colors: ['preto'],
    currency: 'BRL',
    composition: 'Couro',
    additionalInformation: `Largura: 30cm, Altura: 18cm, Profundidade: 9cm, Altura da alça: 64cm.`,
  },
  {
    id: '1e7c54f0-d232-4e84-abc9-b4410db129fe',
    sku: 'casaco-hoodie',
    name: 'Casaco Canguru K Hoodie',
    description: `O Casaco Canguru K Hoodie foi confeccionado em moletom premium, sua modelagem leva um detalhe em recorte lateral trazendo conforto e liberdade de movimento, 

    Possui dedal e um bolso escondido.`,
    price: 20000,
    image:
      'https://cdn.sanity.io/images/d2tfklso/production/6889abdb358480529e52cef0a4cf8521dde66c7b-680x850.jpg',
    images: [
      'https://cdn.sanity.io/images/d2tfklso/production/6889abdb358480529e52cef0a4cf8521dde66c7b-680x850.jpg',
      'https://cdn.sanity.io/images/d2tfklso/production/5092e1ae86670e0b7011128624dd6f5a2b8efe0d-680x850.jpg',
    ],
    sizes: ['m', 'g', 'gg'],
    categories: ['casacos'],
    colors: ['preto', 'branco'],
    currency: 'BRL',
    composition: 'Moletom: 88% Algodão 12% Poliester',
    additionalInformation: `As medidas deste produto podem variar em até 2 cm do valor informado
    `,
  },
]
