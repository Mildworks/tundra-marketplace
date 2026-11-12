import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-200/60 bg-white/40 backdrop-blur-md">
      {/* py-16 memperbesar padding atas/bawah agar tidak sesak */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        
        {/* top section */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          
          {/* brand */}
          <div className="max-w-xs">
            <Link to="/" className="text-xl font-semibold tracking-tight text-neutral-900">
              Tundra
            </Link>
            {/* mt-4 memberi jarak teks deskripsi dari judul */}
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              Kurasi buku independen untuk dibaca dengan tenang. Temukan karyamu di sini.
            </p>
          </div>

          {/* links */}
          {/* gap-16 di HP, sm:gap-24 di tablet/desktop */}
          <div className="flex gap-16 sm:gap-24">
            
            {/* social media */}
            <div>
              {/* mb-5 memperlebar jarak judul ke list */}
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-5">Media Sosial</h4>
              {/* space-y-4 memperlebar jarak antar list */}
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="transition-colors hover:text-neutral-900">Instagram</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Twitter / X</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Goodreads</a></li>
              </ul>
            </div>
            
            {/* help */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-5">Bantuan</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="transition-colors hover:text-neutral-900">Kontak</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Pengiriman</a></li>
                <li><a href="#" className="transition-colors hover:text-neutral-900">Privasi</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* copyright */}
        {/* mt-16 dan pt-8 memberi jarak yang cukup jauh dari konten atasnya */}
        <div className="mt-16 border-t border-neutral-200/60 pt-8 text-center">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Tundra Bookstore. Hak cipta dilindungi.
          </p>
        </div>

      </div>
    </footer>
  )
}