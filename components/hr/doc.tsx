"use client";
import { ChevronsUpDown, CloudUpload, File, FileText, X } from "lucide-react";
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
} from "@/components/ui/select";
import Handleuploadfile from "@/utils/handle-upload-file";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { formatFileSize } from "@/utils/formatFileSize";
import Loading from "../section/ui/loading";
import LoadingSpinner from "../section/ui/Loading";

interface docTypes {
  employee_id: Id<"Employee">;
}

const Doc = ({ employee_id }: docTypes) => {
  const [file, setFile] = useState<File | null>(null);
  const [open, setopen] = useState<Boolean>(false);
  const trigger = () => (open ? setopen(false) : setopen(true));
  const [loading, setloading] = useState<Boolean>(false);
  const [type, settype] = useState<'CIN'|"RIB"|'CNSS'|"CV">();
  const [date , setdate] = useState<string>('')
  const { data } = useSession();
  const filesize = formatFileSize(file?.size || 122)
  const user_Id= (data?.user._id|| '') as Id<"user">
  const Gestionnaire= data?.user.username || ''

  const handledoc= useMutation(api.function.handledocuments)
  async function HnadleFrom(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!file) {
        return toast.error("please select the file ");
      }
      if (!type) {
        return toast.error("please select the type ");
      }
      setloading(true);

      const url = await Handleuploadfile(file);
      await handledoc({
        doc_url:url  as string ,
        employee_id ,
        type ,
        user_Id ,
        date ,
        Gestionnaire
      })
      
      setloading(false);
      trigger()
      return toast.success("Merci  ");

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button
        onClick={trigger}
        className="flex bg-white items-center   border justify-between p-2 cursor-pointer gap-1.5 h-12 border-neutral-200 rounded-md"
      >
        <FileText/>
        <span>Ajouter un document</span>
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
              className="w-[400px] flex flex-col justify-between gap-2 min-h-96 p-2.5 bg-white rounded-md"
            >
              {loading && 
               <LoadingSpinner/>
              }
                <div className="">
                  
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Type</span>

                  <Select  onValueChange={(e) => settype(e)}>
                    <SelectTrigger className="w-full border border-neutral-200 rounded-md">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent className="border border-neutral-200 ">
                      <SelectItem value="CIN">CIN</SelectItem>
                      <SelectItem value="RIB">RIB</SelectItem>
                      <SelectItem value="CNSS">CNSS</SelectItem>
                      <SelectItem value="CV">CV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full flex-col gap-1.5">
                  <span className="text-sm">Date Expiration : </span>
                  <input
                    className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                    type="date"
                    onChange={e=> setdate(e.currentTarget.value)}
                    placeholder="Maricule"
                  />{" "}
                </div>
                <label htmlFor="file">
                  <div className="flex border rounded-md cursor-pointer hover:border-tgcc-500 h-20 border-dashed bg-tgcc-50 justify-center items-center w-full flex-col gap-1.5">
                    <CloudUpload className="opacity-70" />
                    <span className="text-sm opacity-70">Choisir un ou plusieurs PDF</span>
                    <input
                      hidden
                      onChange={(e) => setFile(e.currentTarget.files[0])}
                      className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                      type="file"
                      accept=".pdf"
                      id="file"
                      placeholder=""
                    />{" "}
                  </div>
                </label>
                <AnimatePresence>

                {file && (
                  <motion.div 
                     initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 10 }}
                   className="w-full p-2 h-12 relative rounded-md border flex items-center gap-2 border-neutral-200 ">
                      <File/>
                    <div className="">
                      <span>{file.name}  </span>
                      <span>{filesize} </span>
                    </div>
                    <button onClick={e=> setFile(null)} className="w-6 h-6 top-0 right-0 bg-tgcc-100 rounded-full absolute">
                      <X/>
                    </button>
                  </motion.div>
                )}
                </AnimatePresence>
              <button
                className={
                  "h-11 button border-0 shadow-none cursor-pointer w-full justify-center text-white rounded-md bg-tgcc-950"
                }
              >
               Ajouter         
                      </button>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Doc;
