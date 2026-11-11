import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Keranjang from './pages/Keranjang'
import Checkout from './pages/Checkout'
import Katalog from './pages/Katalog'
import Kategori from './pages/Kategori'
import Tentang from './pages/Tentang'

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="relative flex min-h-screen flex-col"> 
          
          {/* background parallax */}
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] h-[60vw] w-[60vw] rounded-full bg-amber-100/50 blur-[120px]" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
            <div className="absolute top-[20%] -right-[20%] h-[50vw] w-[50vw] rounded-full bg-emerald-100/40 blur-[100px]" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
            <div className="absolute bottom-[-10%] left-[10%] h-[60vw] w-[60vw] rounded-full bg-sky-100/40 blur-[120px]" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
          </div>

          {/* content wrapper */}
          <div className="relative z-10 flex flex-1 flex-col">
            <Navbar />
            
            {/* main content */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buku/:id" element={<ProductDetail />} />
                <Route path="/keranjang" element={<Keranjang />} />
                <Route path="/checkout" element={<Checkout />} />
                
                <Route path="/katalog" element={<Katalog />} />
                <Route path="/kategori" element={<Kategori />} />
                <Route path="/tentang" element={<Tentang />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </div>
      </CartProvider> 
    </BrowserRouter>
  )
}