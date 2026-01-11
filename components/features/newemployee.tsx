"use client";
import React, { FormEvent, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Plus, User, Users } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { countries, departments, nationalities, roles, Types } from "@/constant";
const Newemployee = () => {
  const [open, setopen] = useState<Boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const trigger = () => (open ? setopen(false) : setopen(true));

  async function handleFormSubmition(e:FormEvent<HTMLFormElement>){
        try {
            e.preventDefault()
        } catch (error) {
          
        }
  }
  return (
    <>
      <button
        onClick={trigger}
        className="button shadow-none border-0 rounded-md w-40 h-11 bg-tgcc-600 text-white"
      >
        <Plus />
        Nouvel employé
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={trigger}
            className="inset-0 z-40 fixed bg-neutral-950/15 flex justify-end items-center"
          >
            <motion.form
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[60%] cursor-auto flex flex-col justify-between gap-1 h-full p-2.5 bg-white rounded-none"
            >
             <Alert className="flex flex-col items-start" variant="default">
  <Users />
  <AlertTitle>Profile</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
              <div className="w-full h-full">
                <div className="grid w-full h-max grid-cols-2 gap-2">
                  
                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Nom</span>
                    <input type="text" name="last_name" className="w-full" />
                  </div>

                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Prénom</span>
                    <input type="text" name="first_name" className="w-full" />
                  </div>

                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">CIN</span>
                    <input type="text" name="cin" className="w-full" />
                  </div>

                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">
                      Date de Naissance
                    </span>
                    <input type="date" name="date_naissance" className="w-full" />
                  </div>
                     <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Nationalité</span>
                    <select
                      defaultValue={"Marocaine"}
                      className="input w-full"
                      id="datalist-2"
                      name="nationalite"
                    >
                      {nationalities.map((country, key) => (
                        <option key={key} value={country}>
                          {country}{" "}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Type</span>
                    <select
                    name="type"
                      defaultValue={"Quinzainier"}
                      className="input w-full"
                      id="datalist-2"
                    >
                      {Types.map((type, key) => (
                        <option key={key} value={type}>
                          {type}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                   <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Statut</span>
                    <select
                      name="tgcc_statu"
                      defaultValue={"----"}
                      className="input w-full"
                      id="datalist-2"
                    >
                      {departments.map((country, key) => (
                        <option key={key} value={country}>
                          {country}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Fonction</span>
                    <select
                      name="tgcc_role"
                      defaultValue={"---function--"}
                      className="input w-full"
                      id="datalist-2"
                    >
                      {roles.map((role, key) => (
                        <option key={key} value={role}>
                          {role}{" "}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full flex col-span-2 h-12  items-center">
                    Adress
                  </div>
                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Ville</span>
                    <input name="adresse" type="text" className="w-full" />
                  </div>

                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Pays</span>
                    <select
                     name="pays"
                      defaultValue={"MAROC"}
                      className="input w-full"
                      id="datalist-2"
                    >
                      {countries.map((country, key) => (
                        <option key={key} value={country}>
                          {country}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                  

                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Adress</span>
                    <input name="adresse" type="text" className="w-full" />
                  </div>

                  <div className="w-full items-start  flex flex-col gap-1.5">
                    <span className="text-sm opacity-80">Telephone</span>
                    <input type="text" name="telephone" className="w-full" />
                  </div>

                  
                 
              </div>
              </div>

              <div className="h-12  flex w-full justify-end items-center">
                <button className="button text-white justify-center bg-tgcc-950 h-11 w-40 ">
                  Vailder
                </button>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Newemployee;
