import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faArrowUp,
  faGlobe,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";

import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons/faMoneyBill1";

const Label = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-5 pt-5">
      <div className="flex items-center">
        <span className="w-20 h-20 rounded-4xl bg-[dodgerblue] flex items-center justify-center  mr-4">
          <FontAwesomeIcon icon={faPeopleGroup} color="white" size="xl" />
        </span>
        <div className="m-3">
          <p className="text-[14px] text-gray-500">عدد المستخدمين</p>
          <h3 className="font-bold text-[24px]">2,543</h3>
          <span className="text-green-500">
            <FontAwesomeIcon icon={faArrowUp} size="sm" /> 12.5%
          </span>
          <p className="text-[14px] text-gray-500">منذ الشهر الماضي</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="w-20 h-20 rounded-4xl bg-[#18ca00] flex items-center justify-center  mr-4">
          <FontAwesomeIcon icon={faMoneyBill1} color="white" size="xl" />
        </span>
        <div className="m-3">
          <p className="text-[14px] text-gray-500">إجمالي الأرباح</p>
          <h3 className="font-bold text-[24px]">$45,243</h3>
          <span className="text-green-500">
            <FontAwesomeIcon icon={faArrowUp} size="sm" /> 8.3%
          </span>
          <p className="text-[14px] text-gray-500">منذ الشهر الماضي</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="w-20 h-20 rounded-4xl bg-[#f58d06] flex items-center justify-center  mr-4">
          <FontAwesomeIcon icon={faGlobe} color="white" size="xl" />
        </span>
        <div className="m-3">
          <p className="text-[14px] text-gray-500">عدد الزيارات</p>
          <h3 className="font-bold text-[24px]">12,876</h3>
          <span className="text-green-500">
            <FontAwesomeIcon icon={faArrowUp} size="sm" /> 8.3%
          </span>
          <p className="text-[14px] text-gray-500">منذ الشهر الماضي</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="w-20 h-20 rounded-4xl bg-[#9700fc] flex items-center justify-center mr-4">
          <FontAwesomeIcon icon={faDollar} color="white" size="xl" />
        </span>
        <div className="m-3">
          <p className="text-[14px] text-gray-500">الدخل الشهري</p>
          <h3 className="font-bold text-[24px]">$72,543</h3>
          <span className="text-green-500">
            <FontAwesomeIcon icon={faArrowUp} size="sm" /> 12.5%
          </span>
          <p className="text-[14px] text-gray-500">منذ الشهر الماضي</p>
        </div>
      </div>
    </section>
  );
};

export default Label;
