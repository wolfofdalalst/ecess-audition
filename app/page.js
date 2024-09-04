"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Join now
              </div>
            </button>
            <button className="m-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-black px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Shimmer
            </button>
          </div>
        </motion.div>

      </ImagesSlider>
      <CardHoverEffectDemo />
    </>
  );
}
