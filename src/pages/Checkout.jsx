import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const rupiah = (n) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n)

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [isSuccess, setIsSuccess] = useState(false)

  // redirect if cart is empty
  if (cart.length === 0 && !isSuccess) {
    navigate('/keranjang')
    return null
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    setIsSuccess(true)
    clearCart()
  }

  // success state
  if (isSuccess) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 mb-6">
          <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold text-neutral-900 mb-3">Pembayaran Berhasil!</h2>
        <p className="text-neutral-500 mb-8 max-w-md">Terima kasih sudah berbelanja di Tundra. Pesananmu sedang disiapkan dan akan segera dikirim.</p>
        <Link
          to="/"
          className="rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 active:scale-95"
        >
          Kembali ke Beranda
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <Link to="/keranjang" className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900">
        ← Kembali ke Keranjang
      </Link>
      
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-10">Penyelesaian Pesanan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* shipping form */}
        <form onSubmit={handleCheckout} className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Informasi Pengiriman</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Nama Lengkap</label>
                <input required type="text" className="w-full rounded-xl border border-neutral-300 bg-white/60 px-4 py-3 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 backdrop-blur-sm transition-all" placeholder="Masukkan nama" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Alamat Lengkap</label>
                <textarea required rows="3" className="w-full rounded-xl border border-neutral-300 bg-white/60 px-4 py-3 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 backdrop-blur-sm transition-all resize-none" placeholder="Nama jalan, nomor rumah, kota, kode pos" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Metode Pembayaran</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 rounded-xl border border-neutral-300 bg-white/60 p-4 cursor-pointer hover:bg-white/80 transition-colors backdrop-blur-sm">
                <input type="radio" name="payment" defaultChecked className="h-4 w-4 text-neutral-900 focus:ring-neutral-900" />
                <span className="text-sm font-medium text-neutral-900">Virtual Account (BCA / Mandiri)</span>
              </label>
              <label className="flex items-center gap-3 rounded-xl border border-neutral-300 bg-white/60 p-4 cursor-pointer hover:bg-white/80 transition-colors backdrop-blur-sm">
                <input type="radio" name="payment" className="h-4 w-4 text-neutral-900 focus:ring-neutral-900" />
                <span className="text-sm font-medium text-neutral-900">QRIS / E-Wallet</span>
              </label>
            </div>
          </div>

          <button type="submit" className="w-full rounded-full bg-neutral-900 px-6 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95">
            Konfirmasi & Bayar
          </button>
        </form>

        {/* order summary */}
        <div>
          <div className="sticky top-28 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Ringkasan Akhir</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-neutral-600 line-clamp-1 flex-1 pr-4">{item.qty}x {item.title}</span>
                  <span className="font-medium text-neutral-900">{rupiah(item.price * item.qty)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-200/60 pt-4 space-y-3">
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Subtotal</span>
                <span>{rupiah(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Pengiriman</span>
                <span className="text-emerald-600 font-medium">Gratis</span>
              </div>
              <div className="border-t border-neutral-200/60 pt-4 flex justify-between font-semibold text-lg text-neutral-900">
                <span>Total</span>
                <span>{rupiah(totalPrice)}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}