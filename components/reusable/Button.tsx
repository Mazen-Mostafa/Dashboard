import styles from "@/app/styles.module.css";
const { herobtn } = styles;
type Text = {
  text: string;
};
const Button = ({ text }: Text) => {
  return (
    <button
      className={`${herobtn} w-full font-bold  rounded-xl cursor-pointer py-4 text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
