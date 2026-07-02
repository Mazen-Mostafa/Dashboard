"use client";
import AppImage from "../AppImage";
import LandingContent from "./LandingContent";
import Button from "../reusable/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBook,
  faBookAtlas,
  faCalendar,
  faFile,
  faHandPaper,
  faMessage,
  faMosque,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faSourcetree } from "@fortawesome/free-brands-svg-icons";
import Footer from "../footer/Footer";

const data = [
  { name: "إدارة البيانات & مركز الخدمات", img: "/hero1.jpg" },
  { name: "التجهيز للخدمات السحابية", img: "/hero2.jpg" },
  { name: "التعلم اللآلي والذكاء الإصطناعي", img: "/hero3.jpg" },
];
const LandingOverlay = () => {
  return (
    <section className="min-h-screen mt-20 pt-5 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex py-3">
        <div className=" flex flex-col">
          <div className="p-5 w-[250px] h-[250px] flex flex-col bg-white shadow-2xs rounded-2xl">
            <h3 className="mb-3">لديك اليوم</h3>
            <div className="flex flex-col justify-between flex-1 mb-2">
              <div className="p-2 flex bg-[var(--primary-1)] items-center">
                <FontAwesomeIcon icon={faFile} color="blue" />
                <p className="text-[14px] mr-2">6 حصص</p>
              </div>
              <div className="p-2 flex bg-[var(--primary-1)] items-center">
                <FontAwesomeIcon icon={faFile} color="orange" />
                <p className="text-[14px] mr-2">2 واجب</p>
              </div>
              <div className="p-2 flex bg-[var(--primary-1)] items-center">
                <FontAwesomeIcon icon={faFile} color="red" />
                <p className="text-[14px] mr-2">إختبار واحد</p>
              </div>
            </div>
            <Button text="عرض الجدول" />
          </div>
          <div className="p-5 w-[250px] h-[250px] flex flex-col bg-white shadow-2xs rounded-2xl mt-7">
            <h3 className="mb-3">
              آخر الإشعارات <FontAwesomeIcon icon={faBell} color="yellow" />
            </h3>
            <div className="flex flex-col justify-between flex-1 mb-2">
              <div className="p-2 flex bg-[var(--primary-1)] items-center">
                <FontAwesomeIcon icon={faCalendar} color="blue" />
                <div className=" mr-2">
                  <p className="text-[12px]">إختبار نهائي في مادة الرياضيات</p>
                  <p className="text-[10px] text-gray-500">15 مايو 2026</p>
                </div>
              </div>
              <div className="p-2 flex bg-[var(--primary-1)] items-center">
                <FontAwesomeIcon icon={faCalendar} color="green" />
                <div className=" mr-2">
                  <p className="text-[12px]">إجازة نهاية إسبوع مطولة</p>
                  <p className="text-[10px] text-gray-500">
                    {" "}
                    من 18 _ 20 مايو 2026
                  </p>
                </div>
              </div>
              <div className="p-2 flex bg-[var(--primary-1)] items-center">
                <FontAwesomeIcon icon={faMosque} color="orange" />
                <p className="text-[12px] mr-2">مسابقة حفظ القرآن الكريم</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mr-15 w-full">
          <div className="p-6 w-full rounded-3xl flex items-center justify-between bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900">
            <Image
              src="/head1.jpeg"
              alt="head"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Image
              src="/head2.jpeg"
              alt="head"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Image
              src="/head3.jpeg"
              alt="head"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Image
              src="/head4.jpeg"
              alt="head"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Image
              src="/head1.jpeg"
              alt="head"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Image
              src="/head2.jpeg"
              alt="head"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Image
              src="/head3.jpeg"
              alt="head"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <h3 className="text-[20px] my-5 text-blue-950 font-bold">
            إستكشف غرفتك
          </h3>
          <div className="p-10 flex justify-between">
            <div className="w-[120px] group bg-white relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  className="text-[50px] mb-3 transition group-hover:text-white"
                />

                <p className="font-bold text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
                  إنجازاتي
                </p>
              </div>
            </div>

            <div className="group w-[120px] bg-white relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faBookAtlas}
                  color="red"
                  className="text-[50px] mb-3 transition group-hover:text-white"
                />

                <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
                  المواد الدراسية
                </p>
              </div>
            </div>

            <div className="group w-[120px] bg-white relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faFile}
                  color="green"
                  className="text-[50px] mb-3 transition group-hover:text-white"
                />

                <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
                  الواجبات
                </p>
              </div>
            </div>

            <div className="group w-[120px] bg-white relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faCalendar}
                  color="dodgerblue"
                  className="text-[50px] mb-3 transition group-hover:text-white"
                />

                <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
                  الجدول
                </p>
              </div>
            </div>

            <div className="group w-[120px] bg-white relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faMessage}
                  color="lightgreen"
                  className="text-[50px] mb-3 transition group-hover:text-white"
                />

                <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
                  الرسائل
                </p>
              </div>
            </div>

            <div className="group w-[120px] bg-white relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faSourcetree}
                  color="orange"
                  className="text-[50px] mb-3 transition group-hover:text-white"
                />

                <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
                  المصادر
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LandingOverlay;
