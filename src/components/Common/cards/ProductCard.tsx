import flicker from "./../../../../public/svg/flickr4.svg";
import Image from "next/image";
export default function Product_card({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div
      className="col-span-3 h-32 border-box p-4 flex flex-row justify-start items-start
    rounded-xl cursor-pointer hover:bg-green-100 overflow-hidden"
    >
      <Image src={flicker} alt="SVG" />
      <div className="flex flex-col items-start justify-start text-sm">
        <h2 className="font-semibold text-base mx-2 mb-3 text-stone-700 tracking-wider">
          {title}
        </h2>
        <p className="font-medium text-stone-500 mx-2 text-xs">{content}</p>
      </div>
    </div>
  );
}
