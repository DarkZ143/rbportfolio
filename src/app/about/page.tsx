"use client";
import React from "react";
import Myfooter from "../myfooter/page";
import Navbar from "../navbar/page";
import Loader from "../comp/loader";

const AboutPage = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
        {/* Title with Curly Brackets */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 flex items-center justify-center gap-4">
          <span className="text-orange-600 text-4xl">{'{'}</span>
          <span className="text-blue-500">About Me</span>
          <span className="text-orange-600 text-4xl">{'}'}</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              💡 Skills
            </h2>
            <p className="text-lg leading-relaxed">
              Skilled in <span className="font-medium text-blue-600">HTML, CSS, JavaScript, React, Next.js</span> for frontend development, along with{" "}
              <span className="font-medium text-blue-600">MySQL and MongoDB</span> for database management.
              Experienced in <span className="font-medium text-blue-600">Figma and Adobe Photoshop</span> for design, and{" "}
              <span className="font-medium text-blue-600">Android Studio</span> for mobile app development.
              Projects are managed efficiently using <span className="font-medium text-blue-600">GitHub</span>.
            </p>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              🎓 Certifications
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>JavaScript – HackerRank</li>
              <li>React – HackerRank</li>
              <li>SQL – HackerRank</li>
              <li>Android Development – Netcamp Solutions Pvt. Ltd.</li>
            </ul>
          </section>

          {/* Professional Projects */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              💼 Professional Projects
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Worked as a <span className="font-medium text-blue-600">Freelancer</span> on Android app design projects, delivering responsive and user-friendly interfaces that enhanced client business workflows and customer experience.
            </p>
          </section>

          {/* Hands-On Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              🛠 Hands-On Experience
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Portfolio Website – Next.js, Figma, Photoshop</li>
              <li>Job Platform Web Design – Next.js, Tailwind, Figma</li>
              <li>E-Commerce Web Design – Focused on clean UI/UX</li>
              <li>Social Media App Design – Crafted modern user interactions</li>
            </ul>
          </section>

          {/* Sound Projects */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              🎶 Sound Projects
            </h2>
            <p className="text-lg text-gray-700">
              I also experiment with sound-based creative projects.{" "}
              <a
                href="https://therbsound.vercel.app/"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                View my work here
              </a>.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              🎓 Education
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Currently pursuing{" "}
              <span className="font-medium text-blue-600">B.Tech in Computer Science and Design</span> with an expected graduation in{" "}
              <span className="font-medium text-blue-600">2026</span>.
              This program has provided me with a strong foundation in computer science while nurturing design and problem-solving skills.
            </p>
          </section>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center">
          <button
            onClick={() => window.open("/rbresume.pdf", "_blank")}
            className="mt-12 px-8 py-3 rounded-full cursor-pointer bg-blue-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            View Resume
          </button>
        </div>
      </div>
      <Myfooter />
    </div>
  );
};

export default AboutPage;
