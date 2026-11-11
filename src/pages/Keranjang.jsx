import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// idr formatter
const rupiah = (n) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n)

export default function Keranjang() {
  const { cart, removeFromCart, totalPrice } = useCart()

  // empty state
  if (cart.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-white/60 shadow-sm mb-6">
          <svg className="h-8 w-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Keranjangmu masih kosong</h2>
        <p className="text-neutral-500 mb-8 max-w-sm">Sepertinya kamu belum menemukan buku yang cocok. Yuk, jelajahi katalog kami.</p>
        <Link
          to="/"
          className="rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95"
        >
          Mulai Belanja
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-10">Keranjang Belanja</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* cart list */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm transition-all hover:bg-white/60">
              
              {/* mini cover */}
              <div className="h-28 w-20 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-neutral-200 text-[10px] text-neutral-400">Cover</div>
                )}
              </div>

              {/* info */}
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-neutral-900 line-clamp-1 pr-4">{item.title}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                      title="Hapus"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">{item.author}</p>
                </div>
                
                <div className="flex justify-between items-end mt-4">
                  <p className="text-sm font-medium text-neutral-900">{rupiah(item.price)}</p>
                  <div className="rounded-md border border-neutral-200 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-600">
                    {item.qty} barang
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* order summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Ringkasan Pesanan</h2>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-neutral-600">
                <span>Total Harga</span>
                <span>{rupiah(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Pengiriman</span>
                <span className="text-emerald-600 font-medium">Gratis</span>
              </div>
              <div className="border-t border-neutral-200/60 pt-4 flex justify-between font-semibold text-neutral-900">
                <span>Total Bayar</span>
                <span>{rupiah(totalPrice)}</span>
              </div>
            </div>

           <Link to="/checkout" className="mt-8 block text-center w-full rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95">
              Lanjut ke Pembayaran
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}