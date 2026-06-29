"use client";
import AppImage from "../AppImage";
import LandingContent from "./LandingContent";
import Button from "../reusable/Button";
import { motion } from "framer-motion";

const data = [
  { name: "إدارة البيانات & مركز الخدمات", img: "/hero1.jpg" },
  { name: "التجهيز للخدمات السحابية", img: "/hero2.jpg" },
  { name: "التعلم اللآلي والذكاء الإصطناعي", img: "/hero3.jpg" },
];
const LandingOverlay = () => {
  return (
    <section className="relative min-h-[800px] overflow-hidden py-10">
      {/* BG */}
      <AppImage
        src="/bg-img.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-l from-[var(--primary-1)] via-[var(--primary-2)] to-transparent" />

      <div className="absolute bottom-0 left-0 w-full h-72 bg-[bg-[var(--primary-2)]]/10 blur-xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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
            duration: 1.8,
            delay: 0.2,
          }}
        >
          <div className="flex min-h-[600px] justify-center items-center">
            <LandingContent />
          </div>
        </motion.div>

        <div className="grid gap-7 mt-5 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((el, index) => (
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
              className="flex justify-between items-center p-4 bg-white rounded-2xl"
            >
              <div className="px-3 flex flex-col">
                <h3>0{index + 1}</h3>

                <h4 className="my-3 text-[var(--primary-1)] font-bold text-[16px]">
                  {el.name}
                </h4>

                <div className="mt-auto">
                  <Button text="جرب الآن" />
                </div>
              </div>

              <AppImage
                src={el.img}
                className="rounded-2xl"
                width={160}
                height={160}
                alt="her"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingOverlay;
