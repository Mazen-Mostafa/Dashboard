"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppImage from "../AppImage";
import ButtonThird from "../reusable/ButtonThird";
import {
  faGear,
  faLaptop,
  faNetworkWired,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Services = () => {
  const data = [
    {
      icon: faGear,
      name: "مركز البيانات والخدمات السحابية",
      img: "/serv1.png",
    },
    { icon: faLaptop, name: "تطوير مواقع الويب والتطبيقات", img: "/serv2.png" },
    {
      icon: faNetworkWired,
      name: "خدمات تقنية المعلومات والتعلم الآلي",
      img: "/serv3.png",
    },
    {
      icon: faPaintBrush,
      name: "الإنتاج الرقمي وتصميم التطبيقات",
      img: "/serv4.png",
    },
  ];
  return (
    <div className="mt-12 px-6 mx-auto max-w-7xl">
      <div>
        <h3 className="text-[24px] text-center font-bold text-[var(--primary-1)]">
          أبرز خدماتنا
        </h3>
        <p className="text-[32px] font-bold text-[var(--text)] text-center mb-7">
          نحن نقدم أفضل خدماتنا جودة لمشروعك الخاص
        </p>
      </div>
      <div className="grid gap-3 min-h-[550px]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((card, index) => (
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
              className="p-8 flex rounded-3xl bg-white hover:bg-[var(--primary-3)] hover:[&>*:not(:first-child)]:text-[var(--primary-1)] transition border-zinc-300 shadow-2xl border flex-col items-center justify-between"
            >
              <FontAwesomeIcon
                icon={card.icon}
                size="4x"
                color="#077260"
                className="transition"
              />
              <h3 className="my-5 font-bold text-[18px] text-center transition">
                {card.name}
              </h3>
              <AppImage
                className="my-5"
                src={card.img}
                alt="cardImg"
                width={200}
                height={200}
              />
              <ButtonThird text="إبدأ الآن" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
