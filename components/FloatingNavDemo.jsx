"use client";
import { FloatingNav } from "./ui/floating-navbar";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Results",
      link: "/results",
    },
    {
      name: "Questions",
      link: "/questions",
    },
    {
      name: "Our Website",
      link: "https://ecess-nitd-ten.vercel.app/"
    }
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
