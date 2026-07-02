"use client";

import Image from "next/image";
import { useState } from "react";
import AppImage from "../AppImage";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 bg-blue-50 z-50 w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div className="flex items-center">
          <AppImage
            className="ml-5"
            src="/profile.PNG"
            alt="prof"
            width={50}
            height={50}
          />
          <div>
            <h3 className="text-[var(--text)] text-[24px]">أحمد محمد</h3>
            <p className="text-[var(--text)] text-[18px]">الصف الثالث</p>
          </div>
        </div>
        <Link href="/" className="flex items-center">
          <Image src="logo.png" alt="Logo" width={200} height={50} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
