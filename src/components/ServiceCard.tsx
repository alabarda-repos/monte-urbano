import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export interface IServiceCardParams {
  index: number;
  title: string;
  body: string;
}

export const ServiceCard = ({ index, body, title }: IServiceCardParams) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      key={`svc-${index}`}
      className={`group relative flex h-full w-full flex-col rounded-md bg-white p-6 shadow-xl ${isOpen ? "col-span-2 lg:col-span-1" : ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="absolute right-[-5px] top-[-5px] rounded-full bg-mugreen p-2 text-white">
        {isOpen ? <IconMinus /> : <IconPlus />}
      </div>
      <div className=" text-start text-sm font-semibold lg:text-lg">
        {title}
      </div>
      {isOpen && <div className="mt-3  text-justify text-sm ">{body}</div>}
    </button>
  );
};
