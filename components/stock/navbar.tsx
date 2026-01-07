import { SquarePen } from "lucide-react";
import React from "react";
import DemandButton from "./ui/demand-achat-anterne";

const Navbar = () => {
  return (
    <div className="flex w-full  bg-amber-100  p-2 rounded-md  gap-2 items-center min-h-12 justify-between">
        <span className="text-neutral-950">Manque de stock</span>
        <div className="flex items-center gap-2">
        <DemandButton/>
      <button className="h-11 cursor-pointer w-44 button border-0 bg-tgcc-700 text-white">
        <SquarePen/>
        Ajouter au stock
      </button>

        </div>
    </div>
  );
};

export default Navbar;
