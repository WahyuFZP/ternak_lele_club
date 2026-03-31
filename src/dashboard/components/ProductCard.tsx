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
    <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image Placeholder */}
      <div className="mb-4 h-40 rounded-lg bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">No Image</span>
      </div>

      {/* Product Info */}
      <h3 className="font-semibold text-gray-900">{product.name}</h3>
      <p className="mt-2 text-sm text-gray-600">Price: ${product.price}</p>
      <p className="text-sm text-gray-600">Stock: {product.stock}</p>

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
