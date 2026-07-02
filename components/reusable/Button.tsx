import styles from "@/app/styles.module.css";
const { herobtn } = styles;
type Text = {
  text: string;
};
const Button = ({ text }: Text) => {
  return (
    <button
      className={`${herobtn} font-bold  rounded-xl cursor-pointer py-2 text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
