import React from "react";

function Button_primary_Green({
  text,
  type = "button",
}: {
  text: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      className={`p-3 px-6 text-sm font-semibold flex item-center justify-center text-stone-950 bg-green-400 rounded-lg hover:bg-green-500
  transition ease-in-out delay-150`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button_primary_Green;
