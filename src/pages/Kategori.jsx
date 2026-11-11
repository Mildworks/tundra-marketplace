import { Link } from 'react-router-dom'

// categories data
const mainCategories = [
  { 
    name: 'Fiksi', 
    desc: 'Novel, cerpen, dan karya imajinatif lainnya.', 
    color: 'bg-amber-100/50',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  { 
    name: 'Non-fiksi', 
    desc: 'Biografi, sejarah, sains, dan pengembangan diri.', 
    color: 'bg-emerald-100/50',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    )
  },
  { 
    name: 'Sastra Klasik', 
    desc: 'Karya abadi dari penulis legendaris dunia.', 
    color: 'bg-sky-100/50',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  { 
    name: 'Anak & Remaja', 
    desc: 'Bacaan seru dan mendidik untuk generasi muda.', 
    color: 'bg-purple-100/50',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
]

export default function Kategori() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      
      {/* header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          Kategori
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-500">
          Temukan buku berdasarkan genre atau topik yang kamu sukai.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {mainCategories.map((cat, index) => (
          <Link 
            key={index}
            to="/katalog" 
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/60 md:p-10"
          >
            {/* bg decoration */}
            <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${cat.color} blur-3xl transition-transform duration-500 group-hover:scale-150`} />
            
            <div className="relative z-10">
              {/* icon title */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-neutral-700 shadow-sm border border-white/50 backdrop-blur-md transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {cat.name}
                </h2>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600 pl-16">
                {cat.desc}
              </p>
            </div>

            <div className="relative z-10 mt-10 flex items-center gap-2 text-sm font-medium text-neutral-900 pl-16">
              Lihat Koleksi
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}