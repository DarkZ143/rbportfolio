'use client'

import Navbar from "@/app/navbar/page";
import { motion } from "framer-motion";
import Image from "next/image";
import rahulimg from "@/rahulimg.png";
import FooterPage from "./myfooter/page";


const services = [
  {
    title: "UI/UX Design",
    description:
      "Creating modern, user-friendly, and intuitive designs with seamless user experiences.",
    image: "/uximage.png",
    Link: "https://rbportfolio-one.vercel.app/product-designs",
  },
  {
    title: "Web Design",
    description:
      "Crafting responsive, visually appealing websites optimized for performance.",
    image: "/web.jpg",
    Link: "https://rbportfolio-one.vercel.app/projects",
  },
  {
    title: "Sound Design",
    description:
      "Creating immersive soundscapes and audio experiences that enhance your projects.",
    image: "/sound.png",
    Link: "https://therbsound.vercel.app/",
  },
];

// Motion Variants (cleaner animation handling)
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function HomePage() {
  return (

    <main className="min-h-screen bg-white">

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-28">

        {/* Left Side */}
        <motion.div
          className="flex-1 flex flex-col space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full bg-gray-100 border border-gray-300 w-fit text-sm mt-4">
            👋 Hello!
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I&apos;m <span className="text-orange-500">Rahul</span>, <br />
            UX & UI Designer || Sound Designer
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            “Rahul’s exceptional UX & UI and Sound Designer ensures your projects success.
            Highly recommended.”
          </p>

          <div className="flex space-x-4">
            <button
              onClick={() => window.open("/product-designs", "_blank")}
              aria-label="View my portfolio"
              className="px-6 py-3 rounded-full cursor-pointer bg-orange-500 text-white font-semibold shadow-md shadow-orange-400 hover:scale-105 hover:shadow-lg transition"
            >
              Designs
            </button>
            <button
              onClick={() => window.open("mailto:rahulbhardwajthestar58@gmail.com")}
              aria-label="Hire me"
              className="px-6 py-3 rounded-full cursor-pointer bg-blue-500 text-white font-semibold shadow-md shadow-blue-400 hover:scale-105 hover:shadow-lg transition"
            >
              Hire Me
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex-1 flex flex-col items-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-200 shadow-lg shadow-amber-600">
            <Image
              src={rahulimg}
              alt="Rahul Bhardwaj"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">1 Year</p>
            <p className="text-gray-500">Project Based Experience</p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-16 lg:px-28 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.Link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
              className="relative group bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl 
                   hover:shadow-2xl hover:shadow-orange-500/20 transition-all hover:-translate-y-2 
                   cursor-pointer block"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <p className="text-gray-400 mb-6">{service.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <FooterPage />
    </main>


  );
}
