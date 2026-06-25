import React from "react";
import Image from "next/image";
import ButtonSec from "../reusable/ButtonSec";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import Link from "next/link";
import {
  faLocation,
  faLocationPin,
  faLocationPinLock,
  faMailBulk,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faVoicemail } from "@fortawesome/free-solid-svg-icons/faVoicemail";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-1)] relative w-full left-0 bottom-0 ">
      <section className="max-w-6xl mx-auto">
        <div className="flex-col flex xl:flex-row gap-5 items-center justify-between border-b border-b-gray-500 p-10">
          <Image
            className="block"
            src={"/logo2.png"}
            alt="logo"
            width={50}
            height={50}
          />
          <h2 className="text-[26px] md:text-[34px] text-center text-white">
            هيا بنا لنناقش مشاريعك المستقبلية
          </h2>
          <div className="w-50">
            <button className="py-4 px-8 bg-[var(--primary-1)] font-bold text-[20px] text-white rounded-4xl border border-indigo-550 transition cursor-pointer hover:bg-white hover:text-[var(--primary-1)]">
              إبدأ الآن
            </button>
          </div>
        </div>
        <div className="py-16 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          <div className="h-[200px] flex flex-col items-center justify-between">
            <h3 className="font-bold text-[28px] text-white">ماذا عننا؟</h3>
            <p className=" text-[18px] text-center text-[var(--primary-3)]">
              نهتم بإحتياجاتكم التقنية و نقدم لكم أفضل الحلول الإحترافية.
            </p>
            <div className="flex items-center">
              <span className="w-10 h-10 bg-[var(--primary-3)] rounded-full flex cursor-pointer transition hover:bg-[var(--primary-3)] items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} color="#077260" size="lg" />
              </span>
              <span className="w-10 h-10 bg-[var(--primary-3)] rounded-full flex cursor-pointer mr-7 transition hover:bg-[var(--primary-3)] items-center justify-center">
                <FontAwesomeIcon icon={faTwitter} color="#077260" size="lg" />
              </span>
              <span className="w-10 h-10 bg-[var(--primary-3)] rounded-full flex cursor-pointer  mr-7 transition hover:bg-[var(--primary-3)] items-center justify-center">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  color="#077260"
                  size="lg"
                />
              </span>
              <span className="w-10 h-10 bg-[var(--primary-3)] rounded-full flex cursor-pointer  mr-7 transition hover:bg-[var(--primary-3)] items-center justify-center">
                <FontAwesomeIcon icon={faGithub} color="#077260" size="lg" />
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[28px] mb-4 text-white">
              إختر خدمتك
            </h3>

            <div className="flex flex-col items-center gap-3">
              <Link
                href={"#"}
                className="text-[18px] text-[var(--primary-3)] transition hover:text-[var(--primary-3)] hover:-translate-x-1"
              >
                الخدمات المشهورة
              </Link>
              <Link
                href={"#"}
                className="text-[18px] text-[var(--primary-3)] transition hover:text-[var(--primary-3)] hover:-translate-x-1"
              >
                أعضاء الفريق
              </Link>
              <Link
                href={"#"}
                className="text-[18px] text-[var(--primary-3)] transition hover:text-[var(--primary-3)] hover:-translate-x-1"
              >
                الخصوصية والخدمات
              </Link>
              <Link
                href={"#"}
                className="text-[18px] text-[var(--primary-3)] transition hover:text-[var(--primary-3)] hover:-translate-x-1"
              >
                تسعير الخطط
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[28px] mb-4 text-white">
              ماذا عننا؟
            </h3>

            <div className="flex flex-col items-center gap-3">
              <span className="text-[18px] text-[var(--primary-3)]">
                <FontAwesomeIcon
                  className="text-[var(--primary-3)]"
                  icon={faLocationPin}
                />{" "}
                الرئيسي ,محافظة القاهرة ,مصر
              </span>
              <span className="text-[18px] text-[var(--primary-3)]">
                <FontAwesomeIcon
                  className="text-[var(--primary-3)]"
                  icon={faMailBulk}
                />{" "}
                Info@mail.com
              </span>
              <span className="text-[18px] text-[var(--primary-3)]">
                <FontAwesomeIcon
                  className="text-[var(--primary-3)]"
                  icon={faPhone}
                />{" "}
                456 88 (123) 000+
              </span>
            </div>
          </div>
        </div>
        <p className="text-center text-[var(--primary-3)] text-[18px] py-5">
          كل الحقوق محفوظة لصالح شركة نكست ديفيلوب @2026
        </p>
      </section>
    </footer>
  );
};

export default Footer;
