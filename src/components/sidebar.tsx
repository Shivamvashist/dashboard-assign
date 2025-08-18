"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Home,
  LayoutDashboard,
  BookOpen,
  Layers,
  Settings,
  HelpCircle,
  Menu,
  SidebarIcon,
  ChevronRight,
  Book,
  ChevronsLeftRight,
  GraduationCap,
  MessageSquare,
  Apple,
  MonitorCogIcon,
  ClipboardPasteIcon,
  Laptop,
  Signpost,
  FileQuestion,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import logo from "../../public/codeHelpLogo.svg"
import Image from "next/image"

const items = [
  { href: "/dashboard/courses", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard", label: "All Courses", icon: BookOpen },
  { href: "/dashboard/articles", label: "Articles", icon: Book },
  { href: "/dashboard/help", label: "Playground", icon: ChevronsLeftRight },
  { href: "/dashboard/settings", label: "Guided Path", icon: Signpost },
  { href: "/dashboard/tutorials", label: "Tutorials", icon: FileQuestion },
  { href: "/dashboard/courses", label: "DSA Preparation", icon: Laptop },
  { href: "/dashboard/articles", label: "Mock Test", icon: Layers },
  { href: "/dashboard/help", label: "Paste", icon: ClipboardPasteIcon },
  { href: "/dashboard/settings", label: "Core Subjects", icon: GraduationCap },
  { href: "/dashboard/courses", label: "Quick Compiler", icon: MonitorCogIcon },
  { href: "/dashboard/articles", label: "Flex Fruit Box", icon: Apple },
  { href: "/dashboard/help", label: "Interview Experience ", icon: MessageSquare },
  { href: "/dashboard/settings", label: "Help", icon: HelpCircle },
]

function SidebarContent() {
  const pathname = usePathname()
  return (
    <div className="flex h-full flex-col bg-[#1E1E1E33] ">
      <div className="flex items-center gap-2 p-2 py-4 m-2 border-b border-[#FFFFFF0D]">
        <Image src={logo} alt="Code Help" />
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-2 flex flex-col gap-2">
          {items.map(({ href, label, icon: Icon }) => (
            <Link key={label} href={href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2 hover:shadow-[inset_0_1px_0_0_rgba(161,161,170,0.3)]",
                  pathname === href && "bg-[#1e1e1e] shadow-[inset_0_1px_0_0_rgba(161,161,170,0.3)]"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 text-xs ">
        <div className="border border-[#FFFFFF0D] flex flex-row p-2 rounded-2xl items-center gap-2">
          <div className="p-4 rounded-full bg-black/40">
          </div>
          <div className="flex flex-col">
            <div className="text-white/80">Shivam</div>
            <div className="text-white/60 truncate w-[20ch]">shivamvashist@gmail.com</div>
          </div>
          <div>
            <ChevronRight color="#ffffff" size={14} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="h-screen sticky top-0"><SidebarContent /></div>
      </aside>

      <div className="lg:hidden p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon"><SidebarIcon className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
