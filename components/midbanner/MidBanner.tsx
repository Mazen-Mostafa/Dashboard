"use client";
import PurpleBackground from "../reusable/PurpleBackground";
import AppImage from "../AppImage";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MidBanner() {
  const data = [
    {
      img: "/mid1.jpg",
      name: "إستشارات تقنية",
      text: "كيف تزيد الإنتاجية في مجال تقنية المعلومات",
    },
    {
      img: "/mid2.jpg",
      name: "التعلم الآلي",
      text: "إستراتيجيات لنتائج مستقبلية مبهرة وتحليلات دقيقة",
    },
    {
      img: "/mid3.jpg",
      name: "تصميمات للأنظمة",
      text: "إستكشف الطرق الأفضل لتصميم الأنظمة الحديثة",
    },
  ];
  return (
    <PurpleBackground>
      <section className="mt-12 px-6 mx-auto max-w-7xl relative min-h-[600px] overflow-hidden py-6">
        <div className="flex gap-5 flex-wrap items-center justify-between">
          <div className="max-w-130 flex flex-col justify-between">
            <h3 className="bg-[var(--primary-3)] p-3 mb-5 w-fit text-[18px] text-[var(--primary-2)] font-bold rounded-2xl">
              اشهر الدراسات الحديثة
            </h3>
            <h1 className="text-[24px] md:text-[34px] font-bold text-[white] mb-7">
              إستكشف مجموعة دراساتنا الحديثة المعتمدة عالمياً
            </h1>
          </div>
          <button className="py-4 px-8 bg-[var(--primary-1)] font-bold text-[20px] text-white rounded-4xl border border-indigo-550 transition cursor-pointer hover:bg-white hover:text-[var(--primary-1)]">
            إستكشف الآن
          </button>
        </div>

        <div className="grid gap-7 mt-5 md:grid-cols-2 xl:grid-cols-3">
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
                className="group p-4 hover:bg-white rounded-2xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <AppImage
                    src={card.img}
                    className="rounded-2xl transition-all duration-300"
                    alt="alt"
                    fill
                  />
                  <div className="absolute inset-0 bg-[var(--primary-2)] opacity-0 group-hover:opacity-50 mix-blend-multiply transition-opacity duration-300 rounded-2xl" />
                </div>
                <p className="font-bold text-[16px] text-white my-5 transition-all duration-300 group-hover:text-[var(--primary-2)]">
                  {card.name}
                </p>
                <Link
                  href={"#"}
                  className="font-bold text-[22px] text-white my-5 transition-all duration-300 group-hover:text-[var(--primary-2)]"
                >
                  {card.text}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PurpleBackground>
  );
}
