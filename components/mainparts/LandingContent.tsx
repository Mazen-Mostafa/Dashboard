import React from "react";
import styles from "@/app/styles.module.css";
import Button from "../reusable/Button";

const { container, shimmer } = styles;
const LandingContent = () => {
  return (
    <div>
      <h2
        className={`text-4xl md:text-6xl text-center leading-18 font-bold text-[var(--primary-3)]`}
      >
        أفضل تجربة تقنية
      </h2>

      <p className="mt-6 text-xl leading-10 max-w-250 text-center text-[var(--secondary)]">
        شركة الوصل متخصصة في تقديم الحلول الرقمية المتكاملة، نساعد المؤسسات
        والأفراد على تحويل أفكارهم إلى منتجات رقمية ناجحة من خلال تطوير المواقع
        الإلكترونية والتطبيقات الذكية، وتقديم الاستشارات التقنية، وبناء حلول
        الذكاء الاصطناعي المبتكرة. نؤمن بأن التقنية هي المحرك الأساسي للنمو،
        لذلك نسعى إلى تقديم خدمات عالية الجودة تجمع بين الإبداع والكفاءة لتحقيق
        أفضل النتائج لعملائنا.
      </p>
    </div>
  );
};

export default LandingContent;
