import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const categories = ['Semua', 'Best Seller', 'Fiksi', 'Non-fiksi']

export default function Katalog() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  // filter logic
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'Semua') return true;
    if (activeCategory === 'Best Seller') return p.isBestSeller === true;
    return p.category === activeCategory;
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      
      {/* header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          Katalog Buku
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-500">
          Jelajahi seluruh koleksi kurasi kami. Temukan buku yang tepat untuk menemani waktu luangmu.
        </p>
      </div>

      {/* filter */}
      <div className="mb-10 flex justify-center gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap rounded-full px-6 py-2.5 text-[13px] font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-neutral-900 text-white shadow-md'
                : 'bg-white/60 text-neutral-600 border border-white/80 shadow-sm backdrop-blur-md hover:border-neutral-300 hover:bg-white/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* grid */}
      {filteredProducts.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white/30 py-20 text-center">
          <h3 className="text-lg font-medium text-neutral-900">Buku tidak ditemukan</h3>
          <p className="mt-2 text-sm text-neutral-500">Coba pilih kategori lain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-5">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}