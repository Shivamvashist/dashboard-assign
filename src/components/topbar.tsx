"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, ChevronRight, Search } from "lucide-react"

export function Topbar() {
  return (
    <header className="absolute top-0 left-64 right-0 z-1 bg-background/60 backdrop-blur">
      <div className=" flex h-14 items-center justify-between gap-3 px-4">
        <div>
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
