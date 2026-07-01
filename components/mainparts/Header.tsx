"use client";

import { useState } from "react";
import AppImage from "../AppImage";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "من نحن", href: "/us/" },
  { name: "الخدمات", href: "/services/" },
  { name: "تواصل معنا", href: "/contact/" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center py-3">
          <Link href="/" className="flex items-center">
            <AppImage
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
            <h2 className="text-[26px] mr-3 text-[var(--primary-1)] font-bold">
              الوصل
            </h2>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex h-20 justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
              flex
              items-center
                font-bold
                text-[17px]
                text-[var(--primary-1)]
                transition
                hover:text-[var(--primary-3)]
                h-full
                ${
                  path == link.href
                    ? "text-[var(--primary-3) border-b-[var(--primary-3)] border-b-4"
                    : ""
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faXmark : faBars}
            className="text-[var(--primary-1)]"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          bg-white
          transition-all
          duration-300
          ${mobileMenuOpen ? "max-h-[500px] border-t" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col py-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                px-6
                py-4
                text-center
                font-bold
                text-[var(--primary-1)]
                transition
                hover:bg-gray-50
                hover:text-[var(--primary-3)]
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
