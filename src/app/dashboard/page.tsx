import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full lg:flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        
      </div>
    </div>
  )
}
