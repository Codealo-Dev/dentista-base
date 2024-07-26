"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hola desde {pathname}
      </h1>
      <Button className="my-4">Click me!</Button>
    </>
  );
}
