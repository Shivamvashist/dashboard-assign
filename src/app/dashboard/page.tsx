'use client'
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"

export default function DashboardPage() {

  const [sidebarVisible, setSidebarVisible] = useState(true)
  return (
    <div className="min-h-screen w-full lg:flex font-[var(--font-plus-jakarta),sans-serif]">
      {sidebarVisible && <Sidebar />}
      <div className="flex-1">
        <Topbar onToggleSidebar={() => setSidebarVisible((v) => !v)} sidebarVisible={sidebarVisible} />
        
      </div>
    </div>
  )
}
