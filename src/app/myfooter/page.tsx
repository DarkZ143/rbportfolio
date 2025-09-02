"use client";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaInstagram, FaMusic } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading"); // show processing state

    emailjs
      .send(
        "service_rb603", // EmailJS Service ID
        "template_o5uazbl", // Template ID
        { user_email: email },
        "gJ7SQmiozgLyTONy1" // Public Key
      )
      .then(
        () => {
          setStatus("success");
          setEmail("");
          setTimeout(() => setStatus("idle"), 3000); // reset after 3s
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000); // reset after 3s
        }
      );
  };

  return (
    <footer className="bg-[#1e1e1e] text-white py-10 px-6 rounded-t-2xl mt-12">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Lets Connect there</h2>
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition cursor-pointer"
            onClick={() => window.open("mailto:rahulbhardwajthestar58@gmail.com")}
          >
            Hire me →
          </button>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                RB
              </div>
              <span className="font-bold">Rahul Bhardwaj</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about creating stunning and user-friendly digital
              experiences. Just creating with Figma tools and features.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-xl">
              <FaFacebookF
                className="hover:text-orange-500 cursor-pointer"
                onClick={() =>
                  router.push("https://www.facebook.com/profile.php?id=100025367582705")
                }
              />
              <FaYoutube
                className="hover:text-orange-500 cursor-pointer"
                onClick={() => router.push("http://www.youtube.com/@rahul.bhardwaj")}
              />
              <FaWhatsapp
                className="hover:text-orange-500 cursor-pointer"
                onClick={() => router.push("https://wa.me/919479880143")}
              />
              <FaInstagram
                className="hover:text-orange-500 cursor-pointer"
                onClick={() =>
                  router.push("https://www.instagram.com/rstarbhardwaj/")
                }
              />
              {/* 🎵 Music Portfolio Icon */}
              <FaMusic
                className="hover:text-orange-500 cursor-pointer"
                onClick={() => router.push("https://therbsound.vercel.app")}
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer" onClick={() => router.push("/")}>Home</li>
              <li className="hover:text-white cursor-pointer" onClick={() => router.push("/about")}>About Us</li>
              <li className="hover:text-white cursor-pointer" onClick={() => router.push("/services")}>Services</li>
              <li className="hover:text-white cursor-pointer" onClick={() => router.push("/resume")}>Resume</li>
              <li className="hover:text-white cursor-pointer" onClick={() => router.push("/projects")}>Project</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="cursor-pointer" onClick={() => router.push("tel:+919479880143")}>+91 9479880143</li>
              <li className="cursor-pointer" onClick={() => router.push("mailto:rahulbhardwajthestar58@gmail.com")}>
                rahulbhardwajthestar58@gmail.com
              </li>
              <li className="cursor-pointer" onClick={() => router.push("https://rbportfolio-one.vercel.app")}>
                rbportfolio-one.vercel.app
              </li>
              <li className="cursor-pointer" onClick={() => router.push("https://therbsound.vercel.app")}>
                therbsound.vercel.app
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">
              Get the latest information
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex bg-white rounded-full overflow-hidden"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 flex-grow text-black outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className={`px-6 py-2 text-white font-medium transition ${status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                  }`}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "→"}
              </button>
            </form>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-400 mt-2 text-sm">✅ Subscribed successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2 text-sm">❌ Something went wrong.</p>
            )}
          </div>
        </div>

        <hr className="border-gray-600 mt-8 mb-4" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>Copyright© 2025 Rahul Bhardwaj. All Rights Reserved.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
