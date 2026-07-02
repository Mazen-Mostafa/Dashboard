import styles from "@/app/styles.module.css";
import Landing from "@/components/mainparts/Landing";

const { container } = styles;
export default function Home() {
  return (
    <div className={`w-full `}>
      <Landing />
    </div>
  );
}
