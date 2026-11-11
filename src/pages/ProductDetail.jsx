import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

// idr formatter
const rupiah = (n) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n)

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  
  // find product by id
  const product = products.find((p) => p.id === parseInt(id))

  // not found state
  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-neutral-900">Buku tidak ditemukan</h1>
        <Link to="/" className="mt-4 text-sm text-neutral-500 hover:text-neutral-900">
          ← Kembali ke Beranda
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      
      {/* breadcrumb */}
      <Link 
        to="/" 
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali
      </Link>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        
        {/* product image */}
        <div className="relative flex justify-center">
          <div className="sticky top-28 w-full max-w-sm">
            
            {/* cover shadow */}
            <div className="absolute inset-0 translate-y-4 scale-95 rounded-xl bg-neutral-900/5 blur-2xl" />
            
            <div className="relative flex aspect-[2/3] w-full flex-col overflow-hidden rounded-lg bg-neutral-100 shadow-xl">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-200/60 p-8 text-center">
                  <span className="text-xs uppercase tracking-widest text-neutral-400">Cover Buku</span>
                  <span className="mt-4 text-lg font-semibold text-neutral-500">{product.title}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* product info */}
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {product.category}
          </span>
          
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl md:leading-[1.1]">
            {product.title}
          </h1>
          
          <p className="mt-3 text-lg text-neutral-600">
            oleh <span className="font-medium text-neutral-900">{product.author}</span>
          </p>

          <div className="mt-8 border-t border-neutral-200/60 pt-8">
            <p className="text-3xl font-medium tracking-tight text-neutral-900">
              {rupiah(product.price)}
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Stok tersedia • Pengiriman dalam 1-2 hari
            </p>
          </div>

          {/* description */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-neutral-900">Sinopsis</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Ini adalah deskripsi dummy untuk {product.title}. Nantinya kamu bisa mengganti teks ini dengan sinopsis asli dari masing-masing buku yang ada di database. Buku ini sangat direkomendasikan untuk dibaca di waktu luang.
            </p>
          </div>

          {/* action buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95"
            >
              Tambah ke Keranjang
            </button>
            <button className="flex items-center justify-center rounded-full border border-neutral-300 bg-white/50 px-6 py-4 backdrop-blur-sm transition-all hover:bg-neutral-50 active:scale-95">
              <svg className="h-5 w-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}