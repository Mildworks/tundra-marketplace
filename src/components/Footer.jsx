import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200/60 bg-white/40 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        
        {/* top section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          
          {/* brand */}
          <div className="max-w-xs">
            <Link to="/" className="text-xl font-semibold tracking-tight text-neutral-900">
              Tundra
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Kurasi buku independen untuk dibaca dengan tenang. Temukan karyamu di sini.
            </p>
          </div>

          {/* links */}
          <div className="flex gap-16">
            {/* social media */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">Media Sosial</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="transition-colors hover:text-neutral-900">Instagram</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Twitter / X</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Goodreads</a></li>
              </ul>
            </div>
            
            {/* help */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">Bantuan</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="transition-colors hover:text-neutral-900">Kontak</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Pengiriman</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Privasi</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* copyright */}
        <div className="mt-12 border-t border-neutral-200/60 pt-6 text-center">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Tundra Bookstore. Hak cipta dilindungi.
          </p>
        </div>

      </div>
    </footer>
  )
}