import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CheckCircle2 } from "lucide-react"

const blocks = [
  {
    title: "Programming Foundations:",
    items: "Flowcharts, Variables, Data Types, Loops, Conditionals, Functions, Pattern Printing",
  },
  {
    title: "Core C++ Concepts:",
    items: "Arrays (1D & 2D), Dynamic Arrays, Char Arrays, Pointers, Object-Oriented Programming",
  },
  {
    title: "Mathematics & Logic Building:",
    items: "Basic Math, Searching & Sorting Algorithms, Bit Manipulation, Time & Space Complexity",
  },
  {
    title: "Data Structures:",
    items: "Linked Lists, Stacks & Queues, Trees, Heaps, Hashing & Tries, Graphs",
  },
  {
    title: "Problem Solving Techniques:",
    items: "Recursion, Backtracking, Divide & Conquer, Greedy Algorithms, Sliding Window, Dynamic Programming",
  },
  {
    title: "Extra Topics & Practice:",
    items: "Smart Code Flow, In-depth Execution, Real-world Practice Problems, Optimization Techniques",
  },
]

export function CourseOverview() {
  return (
    <Card className="rounded-lg border-0 bg-[#1e1e1e66] shadow-[inset_0_2px_0_0_rgba(255,255,255,0.1)]">
      <CardHeader>
        <CardTitle className="text-2xl">What you&apos;ll learn</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.title} className="rounded-xl p-4 flex flex-row gap-2">
            <Check className="pt-2" size={24}/>
            <div>
                <div className="mb-2 font-semibold">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.items}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
