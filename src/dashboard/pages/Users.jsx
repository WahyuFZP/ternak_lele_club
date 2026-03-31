import { useState } from "react"
import UserTable from "@/dashboard/components/UserTable"

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
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Users Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
          + Add User
        </button>
      </div>

      {/* Users Table */}
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}
