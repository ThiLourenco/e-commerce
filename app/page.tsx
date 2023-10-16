import { siteConfig } from '../config/site'

import { ImageCarousel } from '../components/ui/carousel'
import Link from 'next/link'

export default async function Page() {
  return (
    <div>
      <div className="mb-10 px-4 pt-20 text-center">
        <h1 className="text-5xl font-extrabold -tracking-tight">
          {siteConfig.name}
        </h1>
        <h2 className="mx-auto mt-4 max-w-3xl text-2xl -tracking-tight">
          Seu estilo em um único lugar
        </h2>
        <h3 className="mx-auto mt-4 max-w-3xl text-2xl -tracking-tight">
          <Link className="hover:text-cyan-600" href="/products">
            Consulte <span className="text-cyan-600">aqui</span> nossos produtos
          </Link>
        </h3>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <ImageCarousel />
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <section
            aria-labelledby="products-heading"
            className="pb-24 pt-6"
          ></section>
        </main>
      </div>
    </div>
  )
}
