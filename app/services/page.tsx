"use client";

import servicesData from "./data";
import React from "react";
import AppImage from "@/components/AppImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { text } from "stream/consumers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicesSection = () => {
  return (
    <div className="my-30 px-6 mx-auto max-w-7xl">
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
            خدماتنا
          </h3>
          <p className="text-[32px] font-bold text-[var(--text)] text-center mb-7">
            تعرف على جميع الخدمات المقدمة لكم من شركة الوصل
          </p>
        </div>
      </motion.div>
      <div className="grid gap-10 mt-5 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((card, index) => (
          <motion.div
            key={index}
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
              delay: index * 0.2,
            }}
          >
            <div
              key={index}
              className="group flex flex-col items-center p-4 bg-white hover:bg-[var(--primary-3)] rounded-2xl transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={card.icon}
                size="3x"
                className="text-[var(--primary-3)] transition group-hover:text-[var(--primary-1)]"
              />
              <h2 className="font-bold mt-3 text-[20px] text-[var(--primary-1)]">
                {card.name}
              </h2>
              <p className="text-[18px] text-center text-[var(--text)] my-5 transition-all duration-300 group-hover:text-[var(--primary-2)]">
                {card.text}
              </p>
              <Link
                href={`/services/${card.id}`}
                className="font-bold text-[18px] text-[var(--primary-1)] hover:text-white my-5 transition-all duration-300 group-hover:underline"
              >
                {"تعرف على المزيد >>"}
              </Link>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <AppImage
                  src={card.img}
                  className="rounded-2xl transition-all duration-300"
                  alt="alt"
                  fill
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
