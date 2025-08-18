"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, ChevronRight, Search, SidebarIcon } from "lucide-react"

interface TopbarProps {
  onToggleSidebar: () => void;
  sidebarVisible: boolean;
}

export function Topbar({ onToggleSidebar, sidebarVisible }: TopbarProps) {
  return (
    <header className={`absolute top-0  right-0 z-1 bg-background/60 backdrop-blur ${sidebarVisible ? " left-64" : "left-0"}`}>
      <div className=" flex h-14 items-center justify-between gap-3 px-4">
        <div className="flex lg:hidden">

        </div>
        <div className="lg:flex items-center gap-4 hidden">
          <button
            aria-label="Toggle sidebar"
            className="bg-transparent border-0 p-0 m-0"
            onClick={onToggleSidebar}
          >
            <SidebarIcon className="h-5 w-5 cursor-pointer" color={!sidebarVisible ? "#ffffff" : "#ffffff70"} />
          </button>
          <div className="flex items-center gap-2 text-muted-foreground">
            Dashboard <ChevronRight color="#ffffff70" size={14} /> All Courses
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-9 border-0 bg-[#1f1f1f] w-full" />
          </div>
          <Button className="bg-[#1e1e1e] text-white font-semibold rounded-lg shadow-[inset_0_1px_0_0_rgba(161,161,170,0.3)] hover:bg-[#1d1d1d]">
              <Bell className="h-5 w-5" />
          </Button>
          <Button className="bg-[#1e1e1e] text-white font-semibold rounded-lg shadow-[inset_0_1px_0_0_rgba(161,161,170,0.3)] hover:bg-[#1d1d1d]">
              Live Dashboard
          </Button>
        </div>
      </div>
    </header>
  )
}
