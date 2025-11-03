"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Navbar from "../navbar/page";
import Myfooter from "../myfooter/page";
import Loader from "../comp/loader";


const projects = [
  {
    title: "DocMagic Converter & Manager",
    description:
      "A powerful offline document editor with multiple functionalities (PDF/Image conversions, merging, splitting, resizing, etc.). Built using Electron JS.",
    tech: "Electron | GUI | High Performance",
    link: "https://docsmagic.netlify.app",
  },
  {
    title: "Bhardwaj Innovation",
    description:
      "A product based company website with 3D designes and immersive screen experinces.",
    tech: "Figma | Next.js | React | TypeScript | Firebase | TailwindCSS",
    link: "https://binv.netlify.app",
  },
  {
  title: "Dessert Ordering Website (Ongoing)",
  description:
    "An online dessert ordering platform with interactive UI and real-time functionalities. Designed in Figma and developed with modern web technologies.",
  tech: "Figma | Next.js | React | TypeScript | Firebase | TailwindCSS",
  link: "https://dessertwala.netlify.app",
},
  {
    title: "Product Designs",
    description:
      "A collection of sleek and modern product designs showcasing various UI/UX and branding concepts.",
    tech: "Figma | Photoshop ",
    link: "/product-designs",
  },
  {
  title: "Client Portfolio - CK",
  description:
    "A professional portfolio website showcasing personal branding and projects, built with responsive design and modern UI practices.",
  tech: "React | Next.js | Figma | TypeScript | TailwindCSS | ChatGPT",
  link: "https://iamck.vercel.app",
},
  {
    title: "Job Platform",
    description:
      "A complete job platform web app with sleek UI and seamless user experience.",
    tech: "Next.js | Figma | Photoshop | Vanta.js | Firebase | EmailJS",
    link: "https://indusjob.vercel.app",
  },
  {
  title: "Client Portfolio - Hirdyansh",
  description:
    "A sleek portfolio for a client, focusing on clean design and interactive UI elements to enhance user experience.",
  tech: "React | Next.js | Figma | TypeScript | TailwindCSS | ChatGPT",
  link: "https://iamhirdyansh.vercel.app",
},
  {
    title: "Fast Book - Ticket Booking App (UX/UI)",
    description:
      "A complete Android app UX/UI prototype designed in Figma for seamless ticket booking experience.",
    tech: "Figma (UX/UI Design)",
    link: "https://www.figma.com/design/75Wh0pebAEaPZ16RYSEHcg/Android-App-works?node-id=0-1&m=dev&t=DeIinvh8YiRDZHhF-1", // replace with your actual Figma file link
  },
  {
  title: "Client Portfolio - Anushka",
  description:
    "A customized client portfolio emphasizing creativity, responsiveness, and user-friendly navigation.",
  tech: "React | Next.js | Figma | TypeScript | TailwindCSS | ChatGPT",
  link: "https://theanushka.netlify.app",
},
  {
    title: "IoT Coffee Machine (UX/UI)",
    description:
      "A smart IoT-based coffee machine UI/UX design built in Figma, showcasing intuitive controls for multiple beverage options.",
    tech: "Figma (IoT UI/UX Design)",
    link: "https://www.figma.com/design/dVZRwI1GO1MMWWr1x4afQj/Coffee-Machine?node-id=2004-2&m=dev&t=craEcUhqTAhfOTsb-1", // replace if you have Figma link

  },
  {
    title: "E-commerce Android App (UX/UI)",
    description:
      "A modern and intuitive e-commerce Android app design created in Figma, focusing on smooth shopping experience and clean UI components.",
    tech: "Figma (UX/UI Design)",
    link: "https://www.figma.com/design/75Wh0pebAEaPZ16RYSEHcg/Android-App-works?node-id=131-1007&m=dev&t=N534ejGZuKk3rsZL-1", // replace with your actual Figma file link
    // image: "/ecommerce-app.png", // optional → add preview if you place an image in /public
  },
  {
    title: "Social Media App Design",
    description:
      "A social media app UI/UX prototype designed entirely in Figma.",
    tech: "Figma  (UX/UI Design)",
    link: "/project/clicked/view/under-maintainance",
  },
  {
    title: "Music Portfolio",
    description:
      "A visually captivating music portfolio website with interactive elements and smooth animations.",
    tech: "Figma | React | Next.js | Vanta.js",
    link: "https://therbsound.vercel.app",
  },
  

];

export default function Projects() {

  return (
    <>
      <Loader />

      <Navbar />
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-12 flex items-center justify-center gap-4">
          <span className="text-orange-500 text-4xl">{'{'}</span>
          <span className="text-blue-600 bg-blue-100 px-4 py-1 rounded-xl shadow-sm">
            Projects
          </span>
          <span className="text-orange-500 text-4xl">{'}'}</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_12px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-orange-500 font-medium">
                    {project.tech}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  {project.downloadLink ? (
                    <a href={project.downloadLink} download>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow cursor-pointer">
                        <Download className="w-4 h-4 mr-2 cursor-pointer" /> Download
                      </Button>
                    </a>
                  ) : (
                    project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 cursor-pointer" /> Visit
                        </Button>
                      </a>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          Many more projects are available on my GitHub.
          <a
            href="https://github.com/darkz143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Check it out
          </a>
        </div>
      </section>
      <Myfooter />
    </>
  );
}






