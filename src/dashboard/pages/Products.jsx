import { useState } from "react"
import ProductCard from "@/dashboard/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Products Page
 * 
 * CRUD untuk management products
 */
export default function ProductsPage() {
  const [products, setProducts] = useState([
    { id: "1", name: "Product 1", price: 99.99, stock: 50 },
    { id: "2", name: "Product 2", price: 149.99, stock: 30 },
    { id: "3", name: "Product 3", price: 199.99, stock: 20 },
  ])

  const handleEdit = (product) => {
    console.log("Edit product:", product)
    // TODO: Open edit modal
  }

  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId))
    console.log("Delete product:", productId)
  }

  return (
    <div className="space-y-6">
      {/* Header & actions */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            Products
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Kelola katalog produk yang tersedia.
          </p>
        </div>
        <Button size="sm" className="mt-1">
          + Add product
        </Button>
      </div>

      {/* Filter & search */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/80 p-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Input
            placeholder="Search products..."
            className="max-w-xs bg-transparent"
          />
        </div>
        <p className="text-xs text-slate-500">
          Menampilkan {products.length} produk
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}
