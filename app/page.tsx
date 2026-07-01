import styles from "@/app/styles.module.css";
import Landing from "@/components/mainparts/Landing";
import MidBanner from "@/components/midbanner/MidBanner";
import Persons from "@/components/persons/Persons";
import PricingCards from "@/components/pricingCards/PricingCards";
import Results from "@/components/results/Results";
import Services from "@/components/services/Services";

const { container } = styles;
export default function Home() {
  return (
    <div className={`w-full `}>
      <Landing />
      <Persons />
      <Services />
      <MidBanner />
      <Results />
      <PricingCards />
    </div>
  );
}
