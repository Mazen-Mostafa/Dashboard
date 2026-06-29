import Image, { ImageProps } from "next/image";
import { BASE_PATH } from "@/lib/basePath";

export default function AppImage(props: ImageProps) {
  const src = `${BASE_PATH}${props.src}`;

  return <Image {...props} src={src} />;
}
