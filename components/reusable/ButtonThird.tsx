import styles from "@/app/styles.module.css";
const { herobtn3 } = styles;
type Text = {
  text: string;
};
const ButtonThird = ({ text }: Text) => {
  return (
    <button
      className={`${herobtn3} w-full font-bold  rounded-xl cursor-pointer py-4 text-white`}
    >
      {text}
    </button>
  );
};

export default ButtonThird;
