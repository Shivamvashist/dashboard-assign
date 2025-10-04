import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/dashboard">
        <Button 
          size="lg"
          className=""
        >
          Dashboard <ArrowRight />
        </Button>
      </Link>
    </div>
  );
}