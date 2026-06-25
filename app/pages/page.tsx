"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import FormPart from "@/components/ui/FormPart";
import Button from "@/components/reusable/Button";
import FormBoxParts from "@/components/ui/FormBoxParts";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
const Form = () => {
  return (
    <div className=" rounded-3xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-100">
      <div className="mb-4">
        <h2 className="text-[30px] text-[dodgerblue]">تسجيل حساب</h2>
        <p className="text-[18px]">
          أنشئ حساباً جديدا من خلال ملئ البيانات التالية.
        </p>
      </div>
      <form className="m-5 max-w-6xl mx-auto not-md:flex  not-md:flex-col w-full">
        <div className="mb-7 ">
          <h3 className="text-[18px] font-bold text-[dodgerblue]">
            1. البيانات الشخصية
          </h3>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <FormPart
              lab1="الإسم"
              lab2="البريد الإلكتروني"
              inPlace1="أدخل إسمك رباعي"
              inPlace2="أدخل بريدك الإلكتروني"
            />

            <FormPart
              lab1="اللقب"
              lab2="رقم الهاتف"
              inPlace1="إدخال اللقب"
              inPlace2="ادخال رقم الهاتف"
            />

            {/* اختلاف وجود select */}
            <main className="">
              <div className="flex flex-col mb-4">
                <label className="text-[16px] mb-2 font-bold  ">
                  نوع المستخدم{" "}
                  <FontAwesomeIcon
                    icon={faAsterisk}
                    color="red"
                    size="xs"
                  />{" "}
                </label>
                <div>
                  <Select.Root dir="rtl">
                    <Select.Trigger className="flex h-[42px] w-full max-w-100 items-center justify-between rounded border border-gray-400 px-3">
                      <Select.Value placeholder="اختر نوع المستخدم" />
                      <Select.Icon>
                        <ChevronDownIcon />
                      </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                      <Select.Content
                        position="popper"
                        className="w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                      >
                        <Select.Viewport className="p-1">
                          <Select.Item
                            value="employee"
                            className="
        relative flex items-center rounded-md px-3 py-2
        text-[15px] font-medium text-gray-700
        outline-none cursor-pointer
        hover:bg-blue-50 hover:text-blue-600
        data-[highlighted]:bg-blue-500
        data-[highlighted]:text-white
      "
                          >
                            <Select.ItemText>موظف</Select.ItemText>
                          </Select.Item>

                          <Select.Item
                            value="teacher"
                            className="
        relative flex items-center rounded-md px-3 py-2
        text-[15px] font-medium text-gray-700
        outline-none cursor-pointer
        hover:bg-blue-50 hover:text-blue-600
        data-[highlighted]:bg-blue-500
        data-[highlighted]:text-white
      "
                          >
                            <Select.ItemText>معلم</Select.ItemText>
                          </Select.Item>

                          <Select.Item
                            value="student"
                            className="
        relative flex items-center rounded-md px-3 py-2
        text-[15px] font-medium text-gray-700
        outline-none cursor-pointer
        hover:bg-blue-50 hover:text-blue-600
        data-[highlighted]:bg-blue-500
        data-[highlighted]:text-white
      "
                          >
                            <Select.ItemText>طالب</Select.ItemText>
                          </Select.Item>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] mb-2 font-bold  ">
                  تاريخ الميلاد{" "}
                  <FontAwesomeIcon
                    icon={faAsterisk}
                    color="red"
                    size="xs"
                  />{" "}
                </label>
                <input
                  className="border-[0.5px] border-gray-400 rounded-[5px] px-2 py-2 focus:outline-none max-w-100 w-full"
                  type="date"
                />
              </div>
            </main>
          </section>
        </div>

        <div className="mb-7">
          <h3 className="text-[18px] font-bold text-[dodgerblue]">
            2. بيانات العنوان
          </h3>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <FormPart
              lab1="الدولة"
              lab2="الرقم البريدي"
              inPlace1="إدخال إسم الدولة"
              inPlace2="إدخال الرقم البريدي"
            />

            <FormPart
              lab1="المحافظة"
              lab2="الشارع"
              inPlace1="إدخال إسم المحافظة"
              inPlace2="إدخال عنوان الشارع"
            />

            <FormPart
              lab1="المدينة"
              lab2={undefined}
              inPlace1="إدخال إسم المدينة"
              inPlace2={undefined}
            />
          </section>
        </div>

        <div className="mb-7">
          <h3 className="text-[18px] font-bold text-[dodgerblue]">
            3. بيانات الحساب
          </h3>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <FormPart
              lab1="الرمز السري"
              lab2={undefined}
              inPlace1="إدخال الرمز السري"
              inPlace2={undefined}
            />

            <FormPart
              lab1="تأكيد الرمز السري"
              lab2={undefined}
              inPlace1="إدخال الرمز السري"
              inPlace2={undefined}
            />

            <FormPart
              lab1="رمز التحقق"
              lab2={undefined}
              inPlace1="إدخال رمز التحقق"
              inPlace2={undefined}
            />
          </section>

          <FormBoxParts />
        </div>
        <Button text="إنشاء حساب" />
      </form>
    </div>
  );
};

export default Form;
