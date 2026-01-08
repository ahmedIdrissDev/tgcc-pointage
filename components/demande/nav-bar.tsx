import { SquarePen } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full  bg-tgcc-950  p-2 rounded-md  gap-2 items-center min-h-12 justify-between">
        <span className="text-white">Demande </span>
        <div className="flex items-center gap-2">
        
      <button className="h-11 cursor-pointer w-44 button border-0 bg-tgcc-700 text-white">
        <SquarePen/>
        Ajouter au stock
      </button>

        </div>
    </div>
  );
};

export default Navbar;
