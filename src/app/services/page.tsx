'use client'
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../navbar/page";
import Myfooter from "../myfooter/page";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import RINGS from "vanta/dist/vanta.rings.min";

const Services = () => {
  const router = useRouter();
  const services = [
    { title: "Simple Web Design Package", desc: "HTML & CSS only", price: "₹500/Page" },
    { title: "Advanced Web Design Package", desc: "React.js powered websites", price: "₹1,200/Page" },
    { title: "Figma Web Development", desc: "Pixel-perfect frontend from Figma", price: "₹1000/Page" },
    { title: "Android UX & UI Design", desc: "Mobile-first user experiences that meets eye-catching designs", price: "₹1,500/Page" },
    { title: "Firebase or MySQL Development", desc: "Database solutions for web and mobile apps", price: "₹1000 to ₹10000 Based on Complexity" },
    { title: "Software Design", desc: "Modern and scalable app design with high quality pixelation", price: "₹1,500/Page" },
    { title: "Sound Design", desc: "Custom sounds for apps & games", price: "₹500 - ₹10,000 Based on Instruments and Samples" },
    { title: "Mixing & Mastering", desc: "Professional audio finishing", price: "₹1,000 - ₹10,000 Based on Tracks" },
    { title: "Music Production", desc: "Full-service music creation", price: "₹5,000 It may vary according to the project" }
  ];

  type Service = { title: string; desc: string; price: string };
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Ref for popup background
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (selectedService && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = RINGS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      }) as { destroy: () => void };
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [selectedService]);

  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-500 mb-12 flex items-center justify-center gap-4">
            <span className="text-orange-500 text-4xl">{'{'}</span>
            Services
            <span className="text-orange-500 text-4xl">{'}'}</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Myfooter />

      {/* Popup with Vanta Background */}
      {selectedService && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            ref={vantaRef}
            className="bg-gray-900 p-6 rounded-2xl shadow-xl w-96 relative text-white overflow-hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-red-500 cursor-pointer z-10"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>

            {/* Popup Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {selectedService.title}
              </h3>
              <p className="text-gray-200 mb-3">{selectedService.desc}</p>
              <p className="text-lg font-bold text-green-300 mb-4">
                Price: {selectedService.price}
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition cursor-pointer"
              >
                Contact me 
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
