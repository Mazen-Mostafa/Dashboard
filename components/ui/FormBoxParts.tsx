import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const FormBoxParts = () => {
  return (
    <div>
      <h3 className="text-[18px] font-bold text-[dodgerblue]">
        3. معلومات إضافية
      </h3>

      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* --- RADIO BUTTONS SECTION --- */}
        <div className="flex flex-col mb-6">
          <label className="text-[16px] mb-2 font-bold">
            الجنس <FontAwesomeIcon icon={faAsterisk} color="red" size="xs" />
          </label>

          {/* Radio Group Container */}
          <div className="flex flex-col gap-6 w-80">
            {/* Radio Option 1 */}
            <label className="flex items-center cursor-pointer group text-[14px]">
              <input
                type="radio"
                name="custom-radio-group"
                className="hidden peer max-w-80"
              />
              {/* Outer Circle */}
              <div className="w-5 h-5 rounded-full border-[0.5px] border-gray-400 bg-white mr-2 flex items-center justify-center group-hover:border-[#1e90ff] peer-checked:border-[#1e90ff] peer-checked:bg-[#1e90ff] transition-all duration-200">
                {/* Inner Dot */}
                <div className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
              </div>
              <span className="text-gray-700 select-none mr-2">ذكر</span>
            </label>

            {/* Radio Option 2 */}
            <label className="flex items-center cursor-pointer group text-[14px]">
              <input
                type="radio"
                name="custom-radio-group"
                className="hidden peer"
              />
              {/* Outer Circle */}
              <div className="w-5 h-5 rounded-full border-[0.5px] border-gray-400 bg-white mr-2 flex items-center justify-center group-hover:border-[#1e90ff] peer-checked:border-[#1e90ff] peer-checked:bg-[#1e90ff] transition-all duration-200">
                {/* Inner Dot */}
                <div className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
              </div>
              <span className="text-gray-700 select-none mr-2">أنثى</span>
            </label>
          </div>
        </div>

        {/* --- CHECKBOXES SECTION --- */}
        <div className="flex flex-col mb-6">
          <label className="text-[16px] mb-2 font-bold">الخدمات المطلوبة</label>

          {/* Checkbox Container (Flex Row) */}
          <div className="flex flex-col gap-6 w-80">
            {/* Checkbox 1 */}
            <label className="flex items-center cursor-pointer group text-[14px]">
              <input type="checkbox" className="hidden peer" />
              {/* Custom Box */}
              <div className="w-5 h-5 rounded-[4px] border-[0.5px] border-gray-400 bg-white mr-2 flex items-center justify-center group-hover:border-[#1e90ff] peer-checked:border-[#1e90ff] peer-checked:bg-[#1e90ff] transition-all duration-200">
                {/* Custom Checkmark Icon (SVG) */}
                <svg
                  className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 select-none mr-2">
                تطوير مواقع
              </span>
            </label>

            {/* Checkbox 2 */}
            <label className="flex items-center cursor-pointer group text-[14px]">
              <input type="checkbox" className="hidden peer" />
              {/* Custom Box */}
              <div className="w-5 h-5 rounded-[4px] border-[0.5px] border-gray-400 bg-white mr-2 flex items-center justify-center group-hover:border-[#1e90ff] peer-checked:border-[#1e90ff] peer-checked:bg-[#1e90ff] transition-all duration-200">
                {/* Custom Checkmark Icon (SVG) */}
                <svg
                  className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 select-none mr-2">
                تصميم واجهات أمامية
              </span>
            </label>
            <label className="flex items-center cursor-pointer group text-[14px]">
              <input type="checkbox" className="hidden peer" />
              {/* Custom Box */}
              <div className="w-5 h-5 rounded-[4px] border-[0.5px] border-gray-400 bg-white mr-2 flex items-center justify-center group-hover:border-[#1e90ff] peer-checked:border-[#1e90ff] peer-checked:bg-[#1e90ff] transition-all duration-200">
                {/* Custom Checkmark Icon (SVG) */}
                <svg
                  className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 select-none mr-2">
                تطبيقات الهاتف
              </span>
            </label>
          </div>
        </div>

        {/* --- TEXTAREA SECTION --- */}
        <div className="flex flex-col mb-4">
          <label className="text-[16px] mb-2 font-bold">ملاحظات إضافية</label>
          <textarea
            rows={4}
            placeholder="اكتب هنا...."
            className="border-[0.5px] border-gray-400 rounded-[5px] px-2 py-2 focus:outline-none max-w-80 text-[14px] resize-none"
          />
        </div>
      </main>
    </div>
  );
};

export default FormBoxParts;
