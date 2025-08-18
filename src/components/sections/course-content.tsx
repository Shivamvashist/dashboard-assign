import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Layers } from "lucide-react"

const chapters = [
  {
    title: "C++ & Basics of Programming",
    meta: { lectures: 5, time: "20 mins" },
    lessons: ["Introduction", "What are flowcharts?", "Resources"],
  },
  {
    title: "Arrays & Complexity",
    meta: { lectures: 5, time: "20 mins" },
    lessons: ["Array intro", "Time complexity", "Space complexity"],
  },
  {
    title: "Searching & Sorting",
    meta: { lectures: 5, time: "20 mins" },
    lessons: ["Binary search", "Two pointers", "Sorting basics"],
  },
  {
    title: "Char Arrays & Strings",
    meta: { lectures: 5, time: "20 mins" },
    lessons: ["Char arrays", "Strings 101", "Problems"],
  },
]

export function CourseContent() {
  return (
    <Card className="bg-[] border-0">
      <CardHeader className="px-0">
        <CardTitle className="text-2xl">Course Content</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Accordion type="single" collapsible className="w-full border-0 bg-[#1e1e1e66] py-2 px-2 rounded-2xl">
          {chapters.map((c, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="data-[state=open]:bg-[#1e1e1e30] data-[state=open]:border-2 border-[#1e1e1e] rounded-xl px-4">
              <AccordionTrigger className="text-left border-0">
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold">{c.title}</span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-sm text-muted-foreground flex gap-2 items-center bg-[#1e1e1e] px-2 rounded-md py-1"><Layers size={16}/>{c.meta.lectures} Lectures</span>
                    <span className="text-sm text-muted-foreground flex gap-2 items-center bg-[#1e1e1e] px-2 rounded-md py-1"><Clock size={16}/>{c.meta.time}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-2 text-sm text-muted-foreground">
                  {c.lessons.map((l) => (
                    <li key={l} className="flex items-center justify-between">
                      <span>• {l}</span>
                      <span className="text-xs">04:01</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
