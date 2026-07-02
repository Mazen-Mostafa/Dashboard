import AppImage from "../AppImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import Link from "next/link";
import {
  faBookJournalWhills,
  faFileContract,
  faHome,
  faLocationPin,
  faMailBulk,
  faMessage,
  faPhone,
  faRestroom,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="relative bg-white bottom-0 mx-auto ">
      <div className="px-10 flex justify-between">
        <div className="group w-[150px] relative overflow-hidden rounded-2xl p-5">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex flex-col items-center">
            <FontAwesomeIcon
              icon={faHome}
              color="red"
              className="text-[50px] mb-3 transition group-hover:text-white"
            />

            <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
              المواد
            </p>
          </div>
        </div>

        <div className="group w-[150px] relative overflow-hidden rounded-2xl p-5">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex flex-col items-center">
            <FontAwesomeIcon
              icon={faBookJournalWhills}
              color="green"
              className="text-[50px] mb-3 transition group-hover:text-white"
            />

            <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
              الواجبات
            </p>
          </div>
        </div>

        <div className="group w-[150px] relative overflow-hidden rounded-2xl p-5">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex text flex-col items-center">
            <FontAwesomeIcon
              icon={faRestroom}
              color="purple"
              className="text-[50px] mb-3 transition group-hover:text-white"
            />

            <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
              المصادر
            </p>
          </div>
        </div>

        <div className="group w-[150px] relative overflow-hidden rounded-2xl p-5">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex flex-col items-center">
            <FontAwesomeIcon
              icon={faMessage}
              color="orange"
              className="text-[50px] mb-3 transition group-hover:text-white"
            />

            <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
              الرسائل
            </p>
          </div>
        </div>

        <div className="group w-[150px]  relative overflow-hidden rounded-2xl p-5">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-600 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex flex-col items-center">
            <FontAwesomeIcon
              icon={faFileContract}
              color="dodgerblue"
              className="text-[50px] mb-3 transition group-hover:text-white"
            />

            <p className="font-bold text-center max-w-[80px] text-[14px] text-blue-950 transition-colors duration-300 group-hover:text-white">
              الجدول
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
