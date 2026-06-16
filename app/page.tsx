import Image from "next/image";
import Label from "@/app/Label";

import Form from "./Form";
import Header from "@/components/mainparts/Header";

export default function Home() {
  return (
    <div className="w-full p-5">
      <Header />
      <Label />
      <Form />
    </div>
  );
}
