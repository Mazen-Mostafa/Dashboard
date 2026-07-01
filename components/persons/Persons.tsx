"use client";

import AppImage from "../AppImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../reusable/Button";
import { motion } from "framer-motion";

const Persons = () => {
  return (
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
      <div
        className={`my-20 px-6 mx-auto max-w-7xl gap-9 flex  lg:flex-nowrap flex-wrap items-center justify-between`}
      >
        <div className="grid lg:grid-cols-2 items-center hidden lg:grid gap-6">
          <AppImage
            className="rounded-2xl "
            width={500}
            height={1000}
            src={"/person2.jpg"}
            alt="person"
          />
          <AppImage
            className="rounded-2xl"
            width={500}
            height={1000}
            src={`/person1.jpg`}
            alt="person"
          />
        </div>
        <div className="flex flex-col items-start justify-between h-full">
          <h3 className="text-[20px] text-[var(--primary-1)] font-bold ">
            عن الشركة
          </h3>
          <h2 className="text-[30px] font-bold text-[var(--primary-2)]">
            تجهيز كامل وإحترافي لجميع لخدماتك التقنية الموثوقة
          </h2>
          <p className="text-[20px] text-[var(--text)] mb-7">
            تجهيز كامل ومحترف لجميع التطبيقات والمشاريع التقنية من خلال استخدام
            احدث وسائل تصميمات النظام والذكاء الإصطناعي وأدوات البنية التحتية
            الحديثة.
          </p>
          <div className=" mb-7">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} color="#bce194" size="lg" />
              <p className="text-[16px] font-bold mr-3">
                {" "}
                التواصل مع الخبراء التقنيين{" "}
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} color="#bce194" size="lg" />
              <p className="text-[16px] font-bold mr-3">
                {" "}
                أنظمة مالية حديثة ومعتمدة{" "}
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} color="#bce194" size="lg" />
              <p className="text-[16px] font-bold mr-3">
                {" "}
                التغطية الكاملة لجميع اجزاء النظام{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 ">
            <Button text="اعرف المزيد >>" />
            <div className="mr-5 flex items-center justify-between">
              <AppImage
                width={50}
                height={50}
                className="rounded-full"
                src={"/cofound.jpg"}
                alt="co"
              />
              <p className="mr-3 flex-1 font-bold text-nowrap">
                المؤسس/ جوهان .كو
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Persons;
