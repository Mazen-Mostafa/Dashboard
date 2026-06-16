import React from "react";
import styles from "@/app/styles.module.css";

const Sidebar = () => {
  return (
    <div
      className={`${styles.shadow} hidden flex-col min-w-60 2xl:flex  shadow-2xs border-r-[0.5px] rounded-2xl`}
    >
      <div className=" flex justify-center items-center text-[28px] mb-7.5 mt-10">
        لوحة <span className="text-blue-600 text-[38px]">القيادة</span>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className={`${styles.link}`}>الصفحة الرئيسية</div>
        <div className={`${styles.link}`}>لوحة البيانات</div>
        <div className={`${styles.link} ${styles.focus}`}>الحساب</div>
        <div className={`${styles.link}`}>المستخدمين</div>
        <div className={`${styles.link}`}>الإحصائيات</div>
        <div className={`${styles.link}`}>الإعدادات</div>
        <div className={`${styles.link}`}>لوحة التحكم</div>
      </div>
    </div>
  );
};

export default Sidebar;
