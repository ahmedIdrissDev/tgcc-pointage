"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { Files, SearchAlert } from "lucide-react";
import React, { FormEvent, useRef, useState } from "react";
import { toast } from "sonner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AnimatePresence, motion } from "motion/react"
import { twMerge } from "tailwind-merge";
import { PointgaeTypes } from "@/types";
import { useSession } from "next-auth/react";

interface  AttendanceType{
   project_id:Id<"Project"> ,
   employee_id:Id<"Employee">

}
const Pointage = () => {
  const [open, setopen] = useState<Boolean>(false);
  const [number_Id, setNumber_Id] = useState<number>(0);
  const [loading , setloading] = useState<boolean>(false)
  const trigger = () => (open ? setopen(false) : setopen(true));
  const {data} = useSession()
  const userId =(data?.user._id || undefined)  as Id<"user">;

  const chantier = useQuery(api.function.getProject, { userId });
  const getEmployeesData = useQuery(api.function.getEmaployeesData, { number_id: number_Id});
  const handleAttendance = useMutation(api.function.handleAttendance)
  const formRef = useRef<HTMLFormElement>(null)
  async function handleSubmite(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setloading(true)
      const formdata = new FormData(e.currentTarget)
      const   project_id = formdata.get("project_id") as Id<"Project"> 
      const employee_id = formdata.get("employee_id") as Id<"Employee">
      const data = {
           project_id  ,
           employee_id
      }
      
      const error = await handleAttendance(data)
      formRef.current?.reset()
      setloading(false)
      if(error?.error) {
        toast.info(error.error)
      }


    } catch (error) {}
  }
  
  const Employee = getEmployeesData
  const {employee ,status ,project_id}  = (Employee  || [] )  as PointgaeTypes
  console.log(status)
  return (
    <>
      <button onClick={trigger} className=" button h-10 cursor-pointer w-40  ">
        <Files />
        <span>Pointage</span>
      </button>
      <AnimatePresence>

      {open && (
        <div onClick={trigger} className="inset-0 z-40 fixed bg-neutral-950/15 flex justify-center items-center">
          <motion.form
            ref={formRef}
            initial={{opacity:0 , translateY:10}}
            animate={{opacity:1 , translateY:0}}
            exit={{opacity:0 , translateY:10}}

            onClick={e=> e.stopPropagation()}
            onSubmit={handleSubmite}
            className="w-1/2 flex flex-col justify-between gap-2 min-h-96 p-2.5 bg-white rounded-md"
          >
            <div className="flex flex-col gap-2">
              <div className="bg-tgcc-600/5  p-1.5 border border-neutral-200 h-12 flex justify-between items-center rounded-md">
                  <span>{chantier?.name} </span>
                  <input type="time" defaultValue={'08:00'} name="" id="" />
              </div>
              <input
                onChange={(e) => setNumber_Id(Number(e.currentTarget.value))}
                className="w-full  rounded-md h-11 border border-neutral-200 px-2"
                type="number"
                placeholder="Maricule"
              />
              {getEmployeesData?.error ? (
                <Alert variant="destructive">
                  <SearchAlert />
                  <AlertTitle>matricule Error </AlertTitle>
                  <AlertDescription>Ce matricule n’existe pas. Veuillez vérifier que le matricule est correct             </AlertDescription>
                </Alert>
              ) : (
                <>
                  {chantier?._id != project_id?._id && (
                    <Alert variant="destructive">
                      <SearchAlert />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        Le salaire n’est pas affecté au chantier.{" "}
                      </AlertDescription>
                    </Alert>
                  )}
                  {employee?._id &&
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="flex flex-col gap-1.5 w-full">
                      <span className="text-sm opacity-80"> Prénom :</span>
                      <input
                        className="w-full  rounded-md h-11 text-sm border border-neutral-200 px-2"
                        type="text"
                        readOnly
                        defaultValue={employee?.first_name}
                        placeholder="Maricule"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <span className="text-sm opacity-80"> Nom :</span>
                      <input
                        className="w-full  rounded-md h-11 text-sm border border-neutral-200 px-2"
                        type="text"
                        readOnly
                        defaultValue={employee?.last_name}
                        placeholder="Maricule"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <span className="text-sm opacity-80"> type :</span>
                      <input
                        className="w-full  rounded-md h-11 text-sm border border-neutral-200 px-2"
                        type="text"
                        readOnly
                        defaultValue={employee?.type}
                        placeholder="Maricule"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <span className="text-sm opacity-80"> etat :</span>
                      <input
                        className="w-full  rounded-md h-11 text-sm border border-neutral-200 px-2"
                        type="text"
                        readOnly
                        defaultValue={employee?.status}
                        placeholder="Maricule"
                      />
                    </div>
                  </div>
                  
                  }
                </>
              )}
              
            </div>
            <input type="text" hidden defaultValue={employee?.project_id} readOnly name="project_id" />
            <input type="text" hidden  defaultValue={employee?._id} readOnly name="employee_id" />
            <div className="flex items-center justify-end gap-1.5">
              <button disabled={loading} className={twMerge('h-11 cursor-pointer w-40 bg-tgcc-600 border-t-2 border-tgcc-500 text-white rounded-md', loading  || number_Id == 0 || number_Id==null ? 'bg-neutral-500 border-neutral-400/35 cursor-auto':'bg-tgcc-600 border-t-2 border-tgcc-500')}>
                Pointage {status && "sortie"}
              </button>
            </div>
          </motion.form>
        </div>
      )}
            </AnimatePresence>

    </>
  );
};

export default Pointage;
