// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const leftNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];

const rightNav = [
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, name }: { href: string; name: string }) => (
    <Link
      href={href}
      onClick={() => setOpen(false)} // close menu when clicked
      className={`block px-4 py-2 rounded-full font-medium transition ${
        pathname === href
          ? "bg-blue-500 text-white shadow-md shadow-orange-300"
          : "text-black hover:text-blue-600 hover:shadow-md hover:shadow-blue-400"
      }`}
    >
      {name}
    </Link>
  );

  return (
    <nav className="w-full px-6 py-4 border-b bg-white shadow-md shadow-blue-400">
      {/* Wrapper */}
      <div className="flex justify-between items-center lg:grid lg:grid-cols-3">
        
        {/* Left Nav (desktop only) */}
        <ul className="hidden lg:flex justify-end items-center space-x-6 ">
          {leftNav.map((item) => (
            <li key={item.name}>
              <NavLink href={item.href} name={item.name} />
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="flex justify-between lg:justify-center items-center w-full lg:w-auto">
          <div className="flex items-center space-x-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full font-bold">
              RB
            </span>
            <span className="text-lg font-semibold">Rahul Bhardwaj</span>
          </div>

          {/* Hamburger (shown below lg) */}
          <button
            className="lg:hidden text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Right Nav (desktop only) */}
        <ul className="hidden lg:flex justify-start items-center space-x-6">
          {rightNav.map((item) => (
            <li key={item.name}>
              <NavLink href={item.href} name={item.name} />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown (animated) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {[...leftNav, ...rightNav].map((item) => (
            <NavLink key={item.name} href={item.href} name={item.name} />
          ))}
        </div>
      </div>
    </nav>
  );
}
