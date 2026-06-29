"use client";
import React from "react";
import Button from "@/components/reusable/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="my-30 px-6 mx-auto max-w-7xl">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div>
          <h3 className="text-[24px] text-center font-bold text-[var(--primary-1)]">
            تواصل معنا
          </h3>
          <p className="text-[32px] font-bold text-[var(--text)] text-center mb-7">
            يمكنك التواصل معنا من خلال البيانات التالية
          </p>
        </div>
        <div className=" mt-20 grid gap-4 md:grid-cols-2 grid-cols-1">
          <div>
            <h3 className="text-[20px] text-[var(--primary-1)] font-bold ">
              أرسل لنا
            </h3>
            <h2 className="text-[26px] font-bold text-[var(--text)]">
              لا تردد في التواصل معنا ومع أعضاء فريقنا
            </h2>
            <p className="text-[18px] text-[var(--text)] my-5">
              أرسل لنا طلبك وشاركنا أفكارك الإنتاجية:{" "}
            </p>
            <Link
              href={"mailto:info@mail.com"}
              className="text-[20px] text-[var(--primary-1)] hover:text-[var(--primary-3)] underline"
            >
              alwasel@mail.com
            </Link>
            <p className="text-[20px] my-5 text-[var(--text)]">
              الرئيسي ,محافظة القاهرة ,مصر
            </p>
            <p className="text-[22px] text-[var(--text)]">456 88 (123) 000+</p>
          </div>
          <form className="">
            <div className="flex mb-5 flex-col lg:flex-row w-full  items-center gap-5 justify-between">
              <input
                className="p-4 w-full border shadow-2xs bg-white border-[var(--border)] rounded-2xl focus:outline-none text-[var(--text)] text-[18px]"
                type="text"
                placeholder="الإسم كامل"
              />
              <input
                className="p-4 w-full border shadow-2xs bg-white border-[var(--border)] focus:outline-none rounded-2xl text-[var(--text)] text-[18px]"
                type="text"
                placeholder="رقم الهاتف"
              />
            </div>
            <input
              className="p-4 mb-5 w-full border shadow-2xs bg-white border-[var(--border)] focus:outline-none rounded-2xl text-[var(--text)] text-[18px]"
              type="email"
              placeholder="البريد الإلكتروني"
            />
            <textarea
              className="p-4 w-full mb-4 min-h-30 shadow-2xs max-h-60 border bg-white border-[var(--border)] focus:outline-none rounded-2xl text-[var(--text)] text-[18px]"
              placeholder="رسالتك...."
            />
            <Button text="إرسال" />
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
