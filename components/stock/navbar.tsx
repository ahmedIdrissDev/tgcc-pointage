import { SquarePen } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full  gap-2 items-center h-12 justify-between">
        <span>Manque de stock</span>
        <div className="flex items-center gap-2">
      <button className="h-11 cursor-pointer w-40 button ">
        Demande d’article{" "}
      </button>
      <button className="h-11 cursor-pointer w-44 button border-0 bg-tgcc-500 text-white">
        <SquarePen/>
        Ajouter au stock
      </button>

        </div>
    </div>
  );
};

export default Navbar;
