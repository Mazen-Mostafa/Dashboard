import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
type Data = {
  lab1: string;
  lab2: string | undefined;
  inPlace1: string;
  inPlace2: string | undefined;
};

const FormPart = ({ lab1, lab2, inPlace1, inPlace2 }: Data) => {
  return (
    <main>
      <div className="flex flex-col mb-4">
        <label className="text-[16px] mb-2 font-bold">
          {lab1}
          <FontAwesomeIcon icon={faAsterisk} color="red" size="xs" />
        </label>

        <input
          placeholder={inPlace1}
          className="border-[0.5px] border-gray-400 rounded-[5px] px-2 py-2 focus:outline-none max-w-100 w-full"
        />
      </div>

      {lab2 && (
        <div className="flex flex-col">
          <label className="text-[16px] mb-2 font-bold">
            {lab2}
            <FontAwesomeIcon icon={faAsterisk} color="red" size="xs" />
          </label>

          <input
            placeholder={inPlace2}
            className="border-[0.5px] border-gray-400 rounded-[5px] px-2 py-2 focus:outline-none max-w-100 w-full"
          />
        </div>
      )}
    </main>
  );
};

export default FormPart;
