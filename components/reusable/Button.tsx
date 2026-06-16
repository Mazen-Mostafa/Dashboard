type Text = {
  text: string;
};
const Button = ({ text }: Text) => {
  return (
    <div className="flex flex-row w-full  mb-20">
      <button className="text-[26px] w-40 cursor-pointer transition hover:bg-blue-500 bg-[dodgerblue] text-white px-4 py-2 font-bold">
        {text}
      </button>
    </div>
  );
};

export default Button;
