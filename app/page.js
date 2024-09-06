"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import Link from "next/link";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1526665814499-fbdb4394ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2lyY3VpdHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1650530415027-dc9199f473ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1iZWRkZWR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1522920192563-6df902920a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW90aGVyYm9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1515630278258-407f66498911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGhlcmJvYXJkfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1682464548420-a93d73c5ec89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdGhlcmJvYXJkfGVufDB8fDB8fHww",
  ];
  return (
    <>
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Join the future of Innovation!
          </motion.p>
          <p className="text-white text-lg w-3/4 text-center">Join us in our journey to equip the next generation of engineers with the knowledge and skills needed to excel. Apply now and be part of a community dedicated to innovation and excellence!</p>
          <div>
            <button className="p-[3px] m-4 relative">
              <Link href="/join">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Join now
                </div>
              </Link>
            </button>
            <button className="m-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-black px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <a href="https://ecess-nitd-ten.vercel.app/">Our Website</a>
            </button>
          </div>
        </motion.div>

      </ImagesSlider>
      <CardHoverEffectDemo />
    </>
  );
}
