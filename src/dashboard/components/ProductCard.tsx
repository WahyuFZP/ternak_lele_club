import { Trash2, Edit } from "lucide-react"

/**
 * ProductCard Component
 * 
 * Card untuk menampilkan product dengan actions
 */

interface Product {
  id: string
  name: string
  price: number
  stock: number
  image?: string
}

interface ProductCardProps {
  product: Product
  onEdit?: (product: Product) => void
  onDelete?: (productId: string) => void
}

export default function ProductCard({
  product,
  onEdit,
  onDelete,
}: ProductCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image Placeholder */}
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-slate-100">
        <span className="text-sm text-slate-400">No image</span>
      </div>

      {/* Product Info */}
      <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-2 text-sm text-slate-700">
        Price: <span className="font-medium">${product.price}</span>
      </p>
      <p className="text-sm text-slate-700">Stock: {product.stock}</p>

      {/* Actions */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit?.(product)}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 transition-colors"
        >
          <Edit className="h-4 w-4" />
          Edit
        </button>
        <button
          onClick={() => onDelete?.(product.id)}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </div>
  )
}
