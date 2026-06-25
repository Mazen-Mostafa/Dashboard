import React from "react";
import Button from "../reusable/Button";

const LandingForm = () => {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-2xl">
      <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
        أحصل على إستشارة
      </h3>

      <div className="mt-8 space-y-5">
        <input
          className="w-full rounded-xl focus:outline-none border p-4 border-[var(--text)]"
          placeholder="الإسم"
        />

        <input
          className="w-full rounded-xl focus:outline-none border p-4 border-[var(--text)]"
          placeholder="البريد الإلكتروني"
        />

        <Button text="إبدأ الآن" />
      </div>
    </div>
  );
};

export default LandingForm;
