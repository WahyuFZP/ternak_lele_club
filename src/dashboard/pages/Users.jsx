import { useState } from "react"
import UserTable from "@/dashboard/components/UserTable"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Users Page
 * 
 * CRUD untuk management users
 */
export default function UsersPage() {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      status: "active",
      joinDate: "2024-02-20",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "inactive",
      joinDate: "2024-03-10",
    },
  ])

  const handleEdit = (user) => {
    console.log("Edit user:", user)
    // TODO: Open edit modal
  }

  const handleDelete = (userId) => {
    setUsers(users.filter((u) => u.id !== userId))
    console.log("Delete user:", userId)
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
        <Button size="sm" className="mt-1">
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

      {/* Users Table */}
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}
