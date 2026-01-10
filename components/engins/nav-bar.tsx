import { SquarePen } from "lucide-react";
import React from "react";
import AjouterEnginsbutton from "./ui/ajouter-engins-button";

const Navbar = () => {
  return (
    <div className="flex bg-white  p-2 rounded-md w-full  gap-2 items-center min-h-12 justify-between">
        <span className="">Manque des engins</span>
        <div className="flex items-center gap-2">
          <AjouterEnginsbutton/>

      <button className="h-11 bg-tgcc-600 text-white cursor-pointer w-44 button border-0 ">
        <SquarePen/>
        <span>Gestion Gasoil</span>
      </button>

        </div>
    </div>
  );
};

export default Navbar;
