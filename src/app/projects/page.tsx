"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Navbar from "../navbar/page";
import Myfooter from "../myfooter/page";

const projects = [
  {
    title: "My Portfolio",
    description:
      "A modern personal portfolio built using Next.js, Figma, Adobe Photoshop, Vanta.js, and EmailJS.",
    tech: "Next.js | Figma | Photoshop | Vanta.js | EmailJS",
    link: "https://rbportfolio-app.vercel.app",
  },
  {
    title: "Job Platform",
    description:
      "A complete job platform web app with sleek UI and seamless user experience.",
    tech: "Next.js | Figma | Photoshop | Vanta.js | Firebase | EmailJS",
    link: "https://indusjob-app.vercel.app",
  },
  {
    title: "E-commerce Website",
    description:
      "An advanced online shopping platform built with scalable design and dynamic UI.",
    tech: "Next.js | Figma | Photoshop | Vanta.js | EmailJS | MySQL",
    link: "/project/clicked/view/under-maintainance"
  },
  {
    title: "Social Media App Design",
    description:
      "A social media app UI/UX prototype designed entirely in Figma.",
    tech: "Figma only",
    link: "/project/clicked/view/under-maintainance",
  },
  {
    title: "Music Player App",
    description:
      "A sleek and modern music player app designed with user experience in mind.",
    tech: "Figma | React | Next.js | Vanta.js",
    link: "/project/clicked/view/under-maintainance",
  },
  {
    title: "DocMagic Converter Pro",
    description:
      "A powerful offline document editor with multiple functionalities (PDF/Image conversions, merging, splitting, resizing, etc.). Built using Python.",
    tech: "Python | GUI | High Performance",
    downloadLink: "/DMC.zip",
  },
  
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-12 flex items-center justify-center gap-4">
            <span className="text-orange-500 text-4xl">{'{'}</span>
            Projects
            <span className="text-orange-500 text-4xl">{'}'}</span>
          </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
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
