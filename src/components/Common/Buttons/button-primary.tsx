import React from "react";

function Button_primary({ text }: { text: string }) {
  return (
    <button
      className={`p-3 px-6 text-sm font-semibold flex item-center justify-center text-stone-950 bg-amber-500 rounded-lg hover:bg-amber-600
  transition ease-in-out delay-150`}
    >
      {text}
    </button>
  );
}

export default Button_primary;
