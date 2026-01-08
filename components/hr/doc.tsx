"use client";
import { ChevronsUpDown, CloudUpload } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Doc = () => {
    const [file, setFile] = useState(null);
  const [open, setopen] = useState<Boolean>(false);
  const trigger = () => (open ? setopen(false) : setopen(true));

  const { data } = useSession();
  const user = data?.user;


 async function HnadleFrom (e:FormEvent<HTMLFormElement>){
     try {
      e.preventDefault()
       const formData = new FormData();
       formData.append("file", file); //
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
       if (data.url) {
        console.log(data.url)
        alert("Upload successful!");
      }
     } catch (error) {
        console.log(error)
     }
  }
  return (
    <>
      <button
        onClick={trigger}
        className="flex bg-white items-center   border justify-between p-2 cursor-pointer gap-1.5 h-11 border-neutral-200 rounded-md"
      >
       <span>Ajoute Docmunte</span>
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={trigger}
            className="inset-0 z-40 fixed bg-neutral-950/15 flex justify-center items-center"
          >
            <motion.form
            onSubmit={HnadleFrom}
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-96 flex flex-col justify-between gap-2 h-96 p-2.5 bg-white rounded-md"
            >
              <div className="flex flex-col gap-2">
              <div className="">
                <h1>Profile</h1>
                <span>user profile</span>
              </div>
                <div className="flex flex-col gap-1">

                        <span className="text-sm">Type</span>

<Select>
  <SelectTrigger className="w-full border border-neutral-200 rounded-md">
    <SelectValue placeholder="type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">CIN</SelectItem>
    <SelectItem value="dark">RIB</SelectItem>
    <SelectItem value="system">CNSS</SelectItem>
  </SelectContent>
</Select>
                </div>
                  <div className="flex w-full flex-col gap-1.5">

                        <span className="text-sm">Date Expiration : </span>
               <input
                 
                className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                type="date"
                placeholder="Maricule"
              />                    </div>
<label htmlFor="file">

 <div className="flex border rounded-2xl h-20 border-dashed bg-tgcc-50 justify-center items-center w-full flex-col gap-1.5">
                  <CloudUpload/>
               <input
                hidden
                onChange={e=> setFile(e.currentTarget.files[0])}
                className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                type="file"
                accept="pdf"
                id="file"
                placeholder=""
              />                    </div>
</label>


              </div>
       <button
        onClick={trigger}
        className={
          "h-11 button border-0 shadow-none cursor-pointer w-full justify-center text-white rounded-md bg-tgcc-500"
        }
      >
        Add new doc
      </button>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Doc;
