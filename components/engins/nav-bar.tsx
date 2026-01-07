import { SquarePen } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-tgcc-100  p-2 rounded-md w-full  gap-2 items-center min-h-12 justify-between">
        <span className="">Manque des engins</span>
        <div className="flex items-center gap-2">
      <button className="h-11 cursor-pointer w-40 button ">
        Demande d’article{" "}
      </button>
      <button className="h-11 bg-tgcc-600 text-white cursor-pointer w-44 button border-0 ">
        <SquarePen/>
        Ajouter au stock
      </button>

        </div>
    </div>
  );
};

export default Navbar;
