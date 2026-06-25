import styles from "@/app/styles.module.css";
const { herobtn2 } = styles;
type Text = {
  text: string;
};

const ButtonSec = ({ text }: Text) => {
  return (
    <button
      className={`${herobtn2} w-full font-bold  rounded-xl cursor-pointer py-4 text-white`}
    >
      {text}
    </button>
  );
};

export default ButtonSec;
