import { Link } from 'react-router-dom'

const rupiah = (n) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n)

export default function ProductCard({ product }) {
  return (
    <Link to={`/buku/${product.id}`} className="group block">
      <div className="relative flex aspect-[2/3] flex-col overflow-hidden rounded-md bg-neutral-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-200/50 p-4 text-center">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">
              Cover
            </span>
            <span className="mt-2 line-clamp-3 text-xs font-medium text-neutral-500">
              {product.title}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3">
        <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-neutral-400">
          {product.category || 'Kategori'}
        </span>

        <h3 className="mt-1 line-clamp-2 text-[13px] font-semibold leading-snug text-neutral-900">
          {product.title}
        </h3>
        
        <p className="mt-1 text-[11px] text-neutral-500">{product.author}</p>
        <p className="mt-1.5 text-[13px] font-medium text-neutral-900">
          {rupiah(product.price)}
        </p>
      </div>
    </Link>
  )
}