import { useState, useEffect, useRef } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import heroBook from '../assets/headerpreview.png' 

// categories list
const categories = [
  'Semua',
  'Best Seller',
  'Fiksi',
  'Non-fiksi'
]

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('Semua')

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // filter logic
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'Semua') return true;
    if (activeCategory === 'Best Seller') return p.isBestSeller === true;
    return p.category === activeCategory;
  })

  return (
    <div className="px-4 pb-1 md:px-6">
      
      {/* hero section */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center overflow-hidden pt-10"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 md:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.4), transparent 40%)`,
          }}
        />

        {/* Grid layout - gap lebih rapat di mobile */}
        <div className="relative z-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center">
          
          {/* TEXT - Di mobile taruh bawah (order-2), di desktop taruh kiri (order-1) */}
          <div className="order-2 md:order-1">
            <p className={`text-[11px] uppercase tracking-[0.2em] text-neutral-500 transition-all duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Toko Buku Independen
            </p>

            <h1 className={`mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-neutral-900 transition-all duration-1000 delay-100 ease-out md:text-6xl md:leading-[1.05] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Buku pilihan,
              <br />
              dibaca dengan tenang.
            </h1>

            <p className={`mt-5 max-w-md text-sm leading-relaxed text-neutral-600 transition-all duration-1000 delay-200 ease-out md:text-base ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Kurasi buku fiksi & non-fiksi dari penulis lokal dan dunia.
            </p>

            <div className={`mt-8 transition-all duration-1000 delay-300 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a
                href="#pilihan"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95"
              >
                Jelajahi Katalog
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* IMAGE - Di mobile taruh atas (order-1), di desktop taruh kanan (order-2) */}
          <div className={`order-1 md:order-2 flex justify-center md:justify-end transition-all duration-1000 delay-300 md:delay-500 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <img 
              src={heroBook} 
              alt="Buku Tundra" 
              className="w-full max-w-[240px] sm:max-w-xs md:max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
            />
          </div>

        </div>
      </section>

      {/* category filter */}
      <section className="mx-auto mt-16 max-w-6xl border-t border-neutral-200/60 pt-8">
        <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-white text-neutral-600 border border-neutral-200/80 shadow-sm hover:border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* featured products */}
      <section id="pilihan" className="mx-auto mt-10 max-w-6xl scroll-mt-24">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
            {activeCategory === 'Semua' ? 'Pilihan Bulan Ini' : activeCategory}
          </h2>
          <a href="#" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900">
            Lihat semua →
          </a>
        </div>

        {/* empty state */}
        {filteredProducts.length === 0 ? (
          <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white/30 py-20 text-center">
            <h3 className="text-lg font-medium text-neutral-900">Belum ada buku di kategori ini</h3>
            <p className="mt-2 text-sm text-neutral-500">Nantikan koleksi terbaru dari kami segera.</p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-5">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}