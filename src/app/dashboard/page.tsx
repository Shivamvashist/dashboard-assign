'use client'
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { CourseOverview } from "@/components/sections/course-overview"
import { CourseContent } from "@/components/sections/course-content"
import { CourseSummary } from "@/components/sections/course-summary"

export default function DashboardPage() {

  const [sidebarVisible, setSidebarVisible] = useState(true)
  return (
    <div className="min-h-screen w-full lg:flex font-[var(--font-plus-jakarta),sans-serif]">
      {sidebarVisible && <Sidebar />}
      <div className="flex-1">
        <Topbar onToggleSidebar={() => setSidebarVisible((v) => !v)} sidebarVisible={sidebarVisible} />
        <main className="w-full  p-4 md:p-6 mt-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <h1 className="text-xl md:text-2xl font-semibold">
                Data Structures & Algorithms [Codehelp RED]
              </h1>
              <CourseOverview />
              <CourseContent />
            </div>
            <div className="space-y-4">
              <CourseSummary />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
