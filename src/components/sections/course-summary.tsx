import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import rating from "../../../public/rating.svg"
import cube from "../../../public/cubes.svg"
import cubeBg from "../../../public/cubesBg.svg"
import Image from "next/image"

export function CourseSummary() {
  return (
    <>
        <Card className="flex relative border-0 bg-[#33333340] w-[330px] rounded-md">
        <CardHeader className="items-start flex flex-col justify-start gap-4" >
            
            <Image src={cubeBg} alt="Cube Background" className="absolute -z-10 top-0" />
            <Image src={cube} alt="Cube" className="absolute inset-0 mx-auto top-8" />

            <CardTitle className="flex flex-col items-baseline mt-36">
                
            <span className="text-lg line-through font-bold">₹5,000</span>
            <div className="flex flex-row gap-2 items-baseline">
                <span className="text-3xl font-semibold">₹2,500</span>
                <div className="text-xl bg-white/15 px-2 rounded-sm">50% off</div>
            </div>
            </CardTitle>
            
            <Image src={rating} alt="Cube Background" className="" />
        </CardHeader>
        <CardContent className="space-y-4">
            <Button className="w-full text-blue-300 font-semibold rounded-[var(--radius-rounded-xl,12px)]
                bg-[linear-gradient(90deg,var(--background-brand-colors-brand-blue,#5B76DB)_0%,var(--background-brand-colors-brand-purple,#AB82EB)_100%)]
                shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
                Buy Now
            </Button>
            
        </CardContent>
        <CardContent>
            <span className="text-sm text-muted-foreground">This Course includes :</span>
            <ul className="list-disc pl-5 text-xl ">
            <li>No pre-requisite required</li>
            <li>50+ hrs on-demand video</li>
            <li>60 live lectures</li>
            <li>Live interview prep</li>
            <li>Live Revision & Doubts Class</li>
            <li>LLD - Design Patterns</li>
            </ul>
        </CardContent>

        </Card>
            <Card className="flex relative border-0 bg-[#33333340] w-[330px] rounded-md">
        
        <CardContent>
            <span className="text-sm font-semibold ">Classes start on 25th April, 2024</span>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2 pt-2">
                <li>Monday, Wednesday, Saturday, Sunday</li>
                <li>Class Timings 8:30pm - 11pm</li>
                <li>C++</li>
                <li>Course Validity 2 Years</li>
            </ul>
        </CardContent>
        </Card>
    </>
  )
}
