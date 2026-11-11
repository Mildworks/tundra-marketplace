export default function Tentang() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
      
      {/* hero section */}
      <div className="text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Tentang Kami
        </span>
        <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl md:leading-[1.15]">
          "Membaca adalah bentuk perlawanan terhadap kebisingan dunia."
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
          Tundra lahir dari sebuah keresahan sederhana: ruang untuk membaca dengan tenang semakin sulit ditemukan. Kami hadir untuk menyediakan kurasi buku terbaik dalam suasana yang hening dan personal.
        </p>
      </div>

      {/* values */}
      <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-3">
        
        {/* value 1 */}
        <div className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-sm backdrop-blur-md">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-neutral-900">Kurasi Pilihan</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            Kami tidak menjual semua buku. Hanya karya yang memiliki kedalaman cerita dan diksi yang indah.
          </p>
        </div>

        {/* value 2 */}
        <div className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-sm backdrop-blur-md">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-neutral-900">Ruang Tenang</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            Desain antarmuka dan toko fisik kami dibuat minimalis, membantumu fokus pada satu hal: buku.
          </p>
        </div>

        {/* value 3 */}
        <div className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-sm backdrop-blur-md">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-neutral-900">Komunitas</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            Tundra bukan sekadar toko, tapi tempat bertemunya para pembaca dan penulis untuk berdiskusi.
          </p>
        </div>
      </div>

      {/* location */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8 text-center">
          Kunjungi Toko Kami
        </h2>
        
        <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-xl md:flex">
          
          {/* address info */}
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-neutral-900">Tundra Blok M</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Jl. Melawai Raya No. 42, Melawai,<br />
              Kec. Kebayoran Baru, Jakarta Selatan<br />
              DKI Jakarta 12160
            </p>
            
            <div className="mt-8 border-t border-neutral-200/60 pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">Jam Operasional</h4>
              <p className="text-sm text-neutral-600">
                Senin - Minggu<br />
                10:00 WIB - 21:00 WIB
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="https://maps.google.com/?q=Blok+M+Jakarta+Selatan" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 active:scale-95"
              >
                Buka di Google Maps
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* map iframe */}
          <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
            <iframe
              title="Lokasi Tundra Blok M"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.78%2C-6.26%2C106.82%2C-6.23&layer=mapnik&marker=-6.24487%2C106.80093"
              className="absolute inset-0 h-full w-full"
            />
          </div>

        </div>
      </div>

    </div>
  )
}