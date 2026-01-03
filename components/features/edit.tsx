"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import {
  File,
  Files,
  Search,
  SearchAlert,
  SquarePen,
  UserRoundSearch,
} from "lucide-react";
import React, { FormEvent, useRef, useState } from "react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { Employee } from "@/types";

interface AttendanceType {
  project_id: Id<"Project">;
  employee_id: Id<"Employee">;
}
const EditButton = ({ _id, first_name, last_name, status, type , number_id }: Employee) => {
  const [open, setopen] = useState<Boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const trigger = () => (open ? setopen(false) : setopen(true));

  return (
    <>
      <button
        onClick={trigger}
        className={
          "h-11 button border-0 shadow-none cursor-pointer w-36 text-white rounded-md bg-tgcc-500"
        }
      >
        <SquarePen />
        Edit profile
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={trigger}
            className="inset-0 z-40 fixed bg-neutral-950/15 flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-1/2 flex flex-col justify-between gap-2 h-[80%] p-2.5 bg-white rounded-md"
            >
              <div className="">

                 <div className="">
              <h1>RH Consultation </h1>
              <span className="text-sm"> Détails complets des salaires employés</span>
            </div>
                <div className="grid grid-cols-2 gap-2">
                       <div className="flex w-full flex-col gap-1.5">
                        <span className="text-sm">Maricule</span>
               <input
                 readOnly
                 defaultValue={number_id}
                className="w-full appearance-none outline-0 opacity-70  rounded-md h-11 border border-neutral-200 px-2"
                type="text"
                placeholder="Maricule"
              />                    </div>
                    <div className="flex w-full flex-col gap-1.5">

                        <span className="text-sm">Nom</span>
               <input
                 
                 defaultValue={first_name}
                className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                type="text"
                placeholder="Maricule"
              />                    </div>

                <div className="flex w-full flex-col gap-1.5">
             <span className="text-sm">Prenom</span>
               <input
                 defaultValue={first_name}
                className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                type="text"
                placeholder="Maricule"
              />               
            </div>
               
                <div className="flex w-full flex-col gap-1.5">
                        <span className="text-sm">Etat</span>
               <input
                 readOnly
                 defaultValue={type}
                className="w-full appearance-none opacity-50 rounded-md h-11 border border-neutral-200 px-2"
                type="text"
                placeholder="Maricule"
              />                    </div>
                <div className="flex w-full flex-col gap-1.5">
                        <span className="text-sm">Type</span>
               <input
                 readOnly
                 defaultValue={status}
                className="w-full appearance-none opacity-50 rounded-md h-11 border border-neutral-200 px-2"
                type="text"
                placeholder="Maricule"
              />                    </div>

               <div className="flex w-full flex-col gap-1.5">
             <span className="text-sm">CNSS</span>
               <input
                 defaultValue={"1245904"}
                className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                type="text"
                placeholder="Maricule"
              />               
            </div>
                </div>

              </div>
               <div className="flex items-center justify-end">
                 <button
        onClick={trigger}
        className={
          "h-11  border-0 shadow-none cursor-pointer w-36 text-white rounded-md bg-tgcc-500"
        }
      >
        Edit profile
      </button>
               </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EditButton;
