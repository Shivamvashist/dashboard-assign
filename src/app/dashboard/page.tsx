'use client'
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { CourseOverview } from "@/components/sections/course-overview"
import { CourseContent } from "@/components/sections/course-content"
import { CourseSummary } from "@/components/sections/course-summary"
import { Clock, Languages, Layers } from "lucide-react"

export default function DashboardPage() {

  const [sidebarVisible, setSidebarVisible] = useState(true)
  return (
    <div className="min-h-screen w-full lg:flex font-[var(--font-plus-jakarta),sans-serif]">
      {sidebarVisible && <Sidebar />}
      <div className="flex-1">
        <Topbar onToggleSidebar={() => setSidebarVisible((v) => !v)} sidebarVisible={sidebarVisible} />
        <main className="w-full p-4 md:p-6 mt-14">
          <div className="grid w-full gap-6 ">
            <div className="space-y-6 lg:col-span-2">
              <div>
                <div className="flex flex-row gap-4 items-center justify-between">
                    <h1 >
                        Data Structures & Algorithms [Codehelp RED]
                    </h1>
                    <div className=" gap-3">
                        <span className="text-sm text-muted-foreground flex gap-2 items-center bg-[#1e1e1e] px-2 rounded-md py-1"><Clock size={16}/>120 hours</span>
                        <span className="text-sm text-muted-foreground flex gap-2 items-center bg-[#1e1e1e] px-2 rounded-md py-1"><Layers size={16}/>60 Chapters</span>
                        <span className="text-sm text-muted-foreground flex gap-2 items-center bg-[#1e1e1e] px-2 rounded-md py-1"><Languages size={16}/>Hindi</span>
                    </div>
                </div>
                <div className="pt-2 text-xl font-bold text-white">
                    A comprehensive program that covers the fundamentals of data structures and algorithms. It includes lectures and exercises to help students design and implement efficient solutions. This course is suitable for beginners and experienced programmers and aims to prepare students for technical interviews and placement exams.
                </div>
              </div>
              <CourseOverview />
              <CourseContent />
            </div>
            <div className="space-y-4 flex flex-col w-[350px]">
              <CourseSummary />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
