"use client";
import React from "react";
import Myfooter from "../myfooter/page";
import Navbar from "../navbar/page";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-950 px-6 py-12">
      {/* Header */}
      {/* Title with Curly Brackets */}
          <h2 className="text-4xl font-extrabold text-blue-500 mb-12 flex items-center justify-center gap-4">
            <span className="text-orange-500 text-4xl">{'{'}</span>
            About Me
            <span className="text-orange-500 text-4xl">{'}'}</span>
          </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            💡 Skills
          </h2>
          <p className="text-lg leading-relaxed">
            I am skilled in{" "}
            <span className="text-orange-500 font-medium">
              HTML, CSS, JavaScript, React, Next.js
            </span>{" "}
            for frontend development, along with{" "}
            <span className="text-orange-500 font-medium">
              MySQL and MongoDB
            </span>{" "}
            for database management. My design expertise includes{" "}
            <span className="text-orange-500 font-medium">
              Figma and Adobe Photoshop
            </span>
            , while I also have hands-on experience with{" "}
            <span className="text-orange-500 font-medium">Android Studio</span>{" "}
            for mobile app development. I manage my projects efficiently using{" "}
            <span className="text-orange-500 font-medium">GitHub</span>.
          </p>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            🎓 Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <span className="text-orange-500 font-medium">JavaScript</span> – HackerRank
            </li>
            <li>
              <span className="text-orange-500 font-medium">React</span> – HackerRank
            </li>
            <li>
              <span className="text-orange-500 font-medium">SQL</span> – HackerRank
            </li>
            <li>
              <span className="text-orange-500 font-medium">Android Development</span> – Netcamp Solutions Pvt. Ltd.
            </li>
          </ul>
        </section>

        {/* Professional Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            💼 Professional Projects
          </h2>
          <p className="text-lg leading-relaxed">
            Worked as a <span className="text-orange-500 font-medium">Freelancer</span> 
            on Android App design projects, delivering responsive and user-friendly interfaces that enhanced client business workflows and customer experience.
          </p>
        </section>

        {/* Hands-On Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            🛠 Hands-On Experience
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <span className="text-orange-500 font-medium">Portfolio Website</span> – Developed with Next.js, Figma, and Photoshop
            </li>
            <li>
              <span className="text-orange-500 font-medium">Job Platform Web Design</span> – Built using Next.js, Tailwind, and Figma
            </li>
            <li>
              <span className="text-orange-500 font-medium">E-Commerce Web Design</span> – Focused on clean UI/UX and scalability
            </li>
            <li>
              <span className="text-orange-500 font-medium">Social Media App Design</span> – Crafted engaging layouts for modern user interactions
            </li>
          </ul>
        </section>

        {/* Sound Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            🎶 Sound Projects
          </h2>
          <p className="text-lg">
            I also experiment with sound-based creative projects.{" "}
            <a
              href="https://pixabay.com/users/rahulbhardwaj603-24310012/"
              target="_blank"
              className="text-orange-500 font-medium hover:underline"
            >
              View my work here
            </a>
            .
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            🎓 Education
          </h2>
          <p className="text-lg leading-relaxed">
            Currently pursuing{" "}
            <span className="text-orange-500 font-medium">
              B.Tech in Computer Science and Design
            </span>{" "}
            with an expected graduation in{" "}
            <span className="text-orange-500 font-medium">2026</span>. This
            program has provided me with a strong foundation in computer science
            fundamentals while nurturing my design and problem-solving skills.
          </p>
        </section>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={() => window.open("/rbresume.pdf", "_blank")}
          className="mt-12 px-8 py-3 rounded-full cursor-pointer bg-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
        >
          View Resume
        </button>
      </div>
    </div>
    <Myfooter />
  </>
  );
};

export default AboutPage;
