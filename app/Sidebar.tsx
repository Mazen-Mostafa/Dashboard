"use client";

import { useContext } from "react";
import styles from "@/app/styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { sidebarToggleContext } from "./Wrapper";

const Sidebar = () => {
  const pathname = usePathname();

  const context = useContext(sidebarToggleContext);

  if (!context) {
    throw new Error("sidbar must be used inside Wrapper");
  }

  const { isOpen, setIsOpen } = context;
  return (
    <div
      className={`
    ${styles.shadow}
    bg-white
    flex-col
    min-h-screen
    overflow-hidden
    transition-all
    duration-300
    ease-in-out
    fixed
    flex
    w-72
    top-0
    z-10
    ${!isOpen ? "-right-72 fixed" : "right-0"}
        border-l
        rounded-l-2xl
      `}
    >
      <div className={`whitespace-nowrap`}>
        <div className="flex justify-center items-center text-[28px] mt-6 mb-8">
          لوحة
          <span className="text-blue-600 text-[38px] mr-2">القيادة</span>
        </div>

        <div className="w-full flex flex-col items-center">
          <Link
            href="/"
            className={`${styles.link} ${pathname === "/" ? styles.focus : ""}`}
          >
            الصفحة الرئيسية
          </Link>

          <Link
            href="/datachart"
            className={`${styles.link} ${
              pathname === "/datachart" ? styles.focus : ""
            }`}
          >
            لوحة البيانات
          </Link>

          <Link
            href="/form"
            className={`${styles.link} ${
              pathname === "/form" ? styles.focus : ""
            }`}
          >
            الحساب
          </Link>

          <Link
            href="/users"
            className={`${styles.link} ${
              pathname === "/users" ? styles.focus : ""
            }`}
          >
            المستخدمين
          </Link>

          <Link
            href="/statistics"
            className={`${styles.link} ${
              pathname === "/statistics" ? styles.focus : ""
            }`}
          >
            الإحصائيات
          </Link>

          <Link
            href="/settings"
            className={`${styles.link} ${
              pathname === "/settings" ? styles.focus : ""
            }`}
          >
            الإعدادات
          </Link>
        </div>
      </div>

      {isOpen && (
        <button
          className="fixed cursor-pointer top-4 right-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faX} color="dodgerblue" size="lg" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
