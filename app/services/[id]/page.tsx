import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import servicesData from "../data";
import { describe } from "node:test";
import AppImage from "@/components/AppImage";
import Button from "@/components/reusable/Button";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id.toString(),
  }));
}

type Props = {
  params: Promise<{
    id: string;
    name: string;
    text: string;
    img: string;
    icon: IconDefinition;
    mainDescription: string;
    subDescriptions: string[];
  }>;
};

export default async function page({ params }: Props) {
  const { id, name, text, img, icon, mainDescription, subDescriptions } =
    await params;

  const service = servicesData.find((serv) => serv.id === Number(id));

  return (
    <section className="my-30 px-6 mx-auto max-w-7xl ">
      <h1 className="text-[40px] my-7 text-center text-[var(--primary-1)] font-bold">
        {service?.name}
      </h1>
      <h3 className="text-[20px] my-7 text-center text-[var(--text)]">
        {service?.mainDescription}
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
        <div className="flex flex-col justify-between gap-10">
          {service?.subDescriptions.map((describe, index) => (
            <div
              className="flex group transition  items-center bg-white rounded-2xl p-4"
              key={index}
            >
              <span className="text-[white] transition ml-5 text-[40px] group-hover:bg-[var(--primary-1)] font-bold rounded-full bg-[var(--primary-3)] min-w-18 h-18 flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-[var(--text)] transition w-full text-center">
                {describe}
              </p>
            </div>
          ))}
        </div>

        <div className=" hover:bg-[var(--primary-3)] shadow-2xl transition rounded-2xl p-5 bg-white">
          <AppImage
            src={service?.img || ""}
            alt={service?.name || ""}
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="flex justify-center my-7">
        <div className="w-60">
          <Button text="إشترك الآن" />
        </div>
      </div>
    </section>
  );
}
