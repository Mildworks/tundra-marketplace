import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/katalog', label: 'Katalog' },
  { to: '/kategori', label: 'Kategori' },
  { to: '/tentang', label: 'Tentang' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // glass styles
  const glass = scrolled
    ? 'bg-white/65 backdrop-blur-xl backdrop-saturate-150 border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)]'
    : 'bg-white/35 backdrop-blur-md border-white/30'

  return (
    <header className="sticky top-3 z-50 px-4 md:px-6">
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:px-6 ${glass}`}
      >
        {/* brand */}
        <Link
          to="/"
          className="text-[17px] font-semibold tracking-tight text-neutral-900"
        >
          Tundra
        </Link>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-black/[0.04] text-neutral-900'
                      : 'text-neutral-500 hover:bg-black/[0.03] hover:text-neutral-900'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* actions */}
        <div className="flex items-center gap-1">
          <button
            aria-label="Cari"
            className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-black/[0.04] hover:text-neutral-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <Link
            to="/keranjang"
            aria-label="Keranjang"
            className="relative rounded-lg p-2 text-neutral-600 transition-colors hover:bg-black/[0.04] hover:text-neutral-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            
            {/* cart badge */}
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-neutral-900 px-1 text-[10px] font-medium text-white">
              {totalItems}
            </span>
          </Link>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-black/[0.04] hover:text-neutral-900 md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/60 bg-white/70 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-black/[0.04] text-neutral-900'
                        : 'text-neutral-600 hover:bg-black/[0.03] hover:text-neutral-900'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}