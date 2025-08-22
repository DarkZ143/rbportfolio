"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Cognizant, Mumbai",
        duration: "Sep 2016 - July 2020",
        role: "Experience Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
        color: "bg-orange-500",
    },
    {
        company: "Sugee Pvt Limited, Mumbai",
        duration: "Sep 2020 - July 2023",
        role: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
        color: "bg-black",
    },
    {
        company: "Cinetstox, Mumbai",
        duration: "Sep 2023 - Present",
        role: "Lead UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
        color: "bg-orange-500",
    },
];

export default function WorkExperience() {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                My <span className="text-orange-500">Work Experience</span>
            </h2>

            <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Vertical line in center */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className={`relative flex flex-col ${i % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        {/* Timeline Dot */}
                        <div
                            className={`w-6 h-6 rounded-full border-4 border-gray-300 absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 ${exp.color}`}
                        />

                        {/* Content */}
                        <div className="bg-white shadow-lg rounded-2xl p-6 w-[90%] md:w-[80%]">
                            <h3 className="font-semibold text-lg">{exp.company}</h3>
                            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                            <h4 className="font-bold text-xl text-gray-800">{exp.role}</h4>
                            <p className="text-gray-600 text-sm mt-2">{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
