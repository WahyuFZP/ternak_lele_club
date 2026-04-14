import { useEffect, useState } from "react"
import UserTable from "@/dashboard/components/UserTable"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/AuthContext"

/**
 * Users Page
 * 
 * CRUD untuk management users
 */
export default function UsersPage() {
  const { createUser, getAllUsers, deleteUser } = useAuth()

 
 
// State Modal
 const [users, setUsers] = useState([])
const [isFetching, setIsFetching ] = useState(false)
const [fetchError, setFetchError ] = useState("")

const [showModal, setShowModal ] = useState(false)
const [formData, setFormData ] = useState({ name: "", email: "", password: "" })
const [isLoading, setIsLoading ] = useState(false)
const [error, setError ] = useState("")


const fetchUsers = async () => {
  setIsFetching(true)
  setFetchError("")
  try {
    const result = await getAllUsers()
    if(result.success) {
      const formattedData = result.data.map((u) => ({
        ...u,
        joinDate: u.created_at
        ? new Date(u.created_at).toLocaleDateString("id-ID")
        : "-",
      }))
      setUsers(formattedData)
    } else {
      setFetchError(result.error)
    }
    } finally {
    setIsFetching(false)
  }
}
// Fetch users on mount
useEffect(() => {
    fetchUsers()
  }, [])

  const handleCreate = async () => {
   setIsLoading(true)
   setError("")

   const result = await createUser(formData.email, formData.password, {
    name: formData.name,
   })
   if(result.success) {
    await fetchUsers()
    setShowModal(false)
    setFormData({ name: "", email: "", password: "" })
   } else {
    setError(result.error)
   }
    setIsLoading(false)
  }

  const handleEdit = (user) => {
    console.log("Edit user:", user)
    // TODO: Open edit modal
  }

  const handleDelete = async (userId) => {
  const confirmed = window.confirm("Apakah Anda yakin ingin menghapus pengguna ini?")
  if(!confirmed) return 

  const result = await deleteUser(userId) 
    if(result.success) {
      await fetchUsers()
    } else {
      alert("Gagal menghapus pengguna: " + result.error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header & actions */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            Users
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Kelola akun pengguna yang terdaftar di aplikasi.
          </p>
        </div>
        <Button size="sm" className="mt-1" onClick={() => setShowModal(true)}>
          + Add user
        </Button>
      </div>

      {/* Filter & search */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/80 p-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Input
            placeholder="Search users..."
            className="max-w-xs bg-transparent"
          />
        </div>
        <p className="text-xs text-slate-500">
          Menampilkan {users.length} pengguna
        </p>
      </div>


      {/* Fetch AllUsers */}
     {isFetching ? (
        <div className="py-10 text-center text-sm text-slate-400">
          Memuat data pengguna...
        </div>
      ) : fetchError ? (
        <div className="py-10 text-center text-sm text-red-500">
          {fetchError}
          <button onClick={fetchUsers} className="ml-2 underline">
            Coba lagi
          </button>
        </div>
      ) : (
        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {/* Modal Create User */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg space-y-4">
            <h2 className="text-lg font-semibold">Tambah User Baru</h2>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 p-2 rounded">{error}</p>
            )}

            <Input
              placeholder="Nama lengkap"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Batal
              </Button>
              <Button onClick={handleCreate} disabled={isLoading}>
                {isLoading ? "Menyimpan..." : "Simpan"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>

      
      
  )
}
