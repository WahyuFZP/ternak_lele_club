import { Badge } from "@/components/ui/badge"

/**
 * UserTable Component
 *
 * Tabel untuk menampilkan list users dengan actions (edit, delete)
 */

interface User {
  id: string
  name: string
  email: string
  status: "active" | "inactive"
  joinDate: string
}

interface UserTableProps {
  users?: User[]
  onEdit?: (user: User) => void
  onDelete?: (userId: string) => void
}

const DEMO_USERS: User[] = [
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
]

export default function UserTable({
  users = DEMO_USERS,
  onEdit,
  onDelete,
}: UserTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-sm">
      <table className="w-full">
        <thead className="border-b bg-slate-50/80">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Join Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b last:border-b-0 hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-3 text-sm text-slate-900">{user.name}</td>
              <td className="px-6 py-3 text-sm text-slate-600">{user.email}</td>
              <td className="px-6 py-3 text-sm">
                <Badge
                  variant={user.status === "active" ? "secondary" : "outline"}
                  className="capitalize"
                >
                  {user.status}
                </Badge>
              </td>
              <td className="px-6 py-3 text-sm text-slate-600">{user.joinDate} </td>
              <td className="px-6 py-3 text-sm">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit?.(user)}
                    className="text-xs font-medium text-violet-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete?.(user.id)}
                    className="text-xs font-medium text-rose-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
