"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const data = [
  {
    number: 98,
    char: "%",
    name: "معدل الزيارات",
  },
  {
    number: 35,
    char: "+",
    name: "أعضاء الفريق المحترفين",
  },
  {
    number: 88,
    char: "%",
    name: "الربح السنوي",
  },
  {
    number: 91,
    char: "%",
    name: "التقييمات الإيجابية",
  },
];

const Counter = ({ value, char }: { value: number; char: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 5, // increase this for slower animation
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <h3
      ref={ref}
      className="group-hover:text-white transition text-[50px] font-bold text-[var(--primary-2)]"
    >
      {display}
      {char}
    </h3>
  );
};

const Results = () => {
  return (
    <div className="my-10 p-5 z-10 mx-auto max-w-7xl">
      <div>
        <h3 className="text-[24px] text-center font-bold text-[var(--primary-1)]">
          النتائج الملموسة
        </h3>
        <p className="text-[32px] font-bold text-[var(--text)] text-center mb-7">
          تعرف على بعض من النتائج الملموسة خاصتنا
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            <div className="p-8 group hover:-translate-y-1 transition hover:bg-[var(--primary-2)] bg-white rounded-2xl border border-[var(--primary-3)] shadow-2xl">
              <Counter value={card.number} char={card.char} />
              <p className="text-[20px] text-[var(--primary-2)] font-bold group-hover:text-white transition">
                {card.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Results;
