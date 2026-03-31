import { useState } from "react"
import ProductCard from "@/dashboard/components/ProductCard"

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
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
          + Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
