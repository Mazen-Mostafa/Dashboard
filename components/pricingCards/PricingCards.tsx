"use client";
import React from "react";
import ButtonSec from "../reusable/ButtonSec";
import Button from "../reusable/Button";
import { faLess } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const plans = [
  {
    name: "الخطة الموفرة",
    subtitle: "للمشاريع الصغيرة",
    price: 19,
    features: [
      { text: "إستشارات تقنية", active: true },
      { text: "تصميم منتجات رقمية", active: true },
      { text: "التعلم الآلي", active: false },
      { text: "أنظمة أوتوميشن عالية الدقة", active: false },
      { text: "الدعم الفني السريع", active: false },
    ],
    highlighted: false,
  },
  {
    name: "الخطة الإحترافية",
    subtitle: "للمشاريع الإحترافية",
    price: 99,
    features: [
      { text: "إستشارات تقنية", active: true },
      { text: "تصميم منتجات رقمية", active: true },
      { text: "التعلم الآلي", active: true },
      { text: "أنظمة أوتوميشن عالية الدقة", active: true },
      { text: "الدعم الفني السريع", active: true },
    ],
    highlighted: true,
  },
  {
    name: "الخطة الشاملة",
    subtitle: "للمشاريع عالية الإنتاجية",
    price: 54.99,
    features: [
      { text: "إستشارات تقنية", active: true },
      { text: "تصميم منتجات رقمية", active: true },
      { text: "التعلم الآلي", active: false },
      { text: "أنظمة أوتوميشن عالية الدقة", active: true },
      { text: "الدعم الفني السريع", active: true },
    ],
    highlighted: false,
  },
];

const PricingCards = () => {
  return (
    <div className="my-20 max-w-6xl mx-auto px-4">
      <div>
        <h3 className="text-[24px] text-center font-bold text-[var(--primary-1)]">
          نظام خطط الإشتراك
        </h3>
        <p className="text-[32px] font-bold text-[var(--text)] text-center mb-7">
          تعرف على الخطط المقدمة من خلالنا بأسعار تناسب السوق
        </p>
      </div>
      <div className="grid gap-7 mt-5 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan, index) => (
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
              className={`relative border hover:-translate-y-1 transition border-gray-300 shadow-2xl overflow-hidden rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-[var(--primary-1)] text-white"
                  : "bg-white text-[var(--primary-1)]"
              }`}
            >
              {/* Decorative circle */}
              <div
                className={`absolute -right-10 top-10 w-40 h-40 rounded-full ${
                  plan.highlighted ? "bg-white/5" : "bg-black/5"
                }`}
              />

              <h3 className="text-2xl font-bold relative z-10">{plan.name}</h3>
              <p
                className={`mt-1 relative z-10 ${
                  plan.highlighted ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <ul className="mt-6 space-y-3 relative z-10">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 font-bold ${
                      feature.active
                        ? plan.highlighted
                          ? "text-white"
                          : "text-[#0c0e1f]"
                        : plan.highlighted
                          ? "text-gray-500"
                          : "text-gray-400"
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        feature.active ? "text-[#bce194]" : "opacity-50"
                      }`}
                    >
                      •
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <div
                className={`mt-8 pt-6 border-t relative z-10 ${
                  plan.highlighted ? "border-white/10" : "border-black/10"
                }`}
              >
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold">${plan.price}</span>
                  <span
                    className={`text-sm mb-2 ${
                      plan.highlighted ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    /شهرياً
                  </span>
                </div>
                <p
                  className={`my-3 ${
                    plan.highlighted ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.subtitle}
                </p>
                {plan.highlighted ? (
                  <ButtonSec text={"إختر الخطة"} />
                ) : (
                  <Button text={"إختر الخطة"} />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
