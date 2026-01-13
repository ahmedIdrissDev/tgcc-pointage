"use client";
import { ContextStoreDataProvider } from "@/Context";
import { AnimatePresence, motion } from "motion/react";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { User2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import LoadingSpinner from "@/components/section/ui/Loading";
import { DP } from "@/constant";

export interface Demande {
  user_Id: Id<"user">;
  project_id: Id<"Project">;
  code: string;
  dateLivraison: string;
  commentaire: string;
  quantite: string;
}

const DemandAntern = () => {
  const [open, setopen] = useState<Boolean>(false);
  const trigger = () => (open ? setopen(false) : setopen(true));
  const { Project } = ContextStoreDataProvider();
  const [loading , setloading] = useState<boolean>(false)
  
  const { data } = useSession();
  const username =  data?.user.username

  const handleDemade = useMutation(api.stock.handleDemande);
  const handleFrom = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user_Id = data?.user._id as Id<"user">;
      const fromdata = new FormData(e.currentTarget);
      const Inputdata = Object.fromEntries(fromdata.entries());
      if(!Project) {
        return toast.error('Chantier')
      }
      setloading(true)
      const obj: Demande = {
        ...Inputdata,
        project_id: Project?._id,
        user_Id,
      };
      await handleDemade(obj);
     setloading(false)
     trigger()

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={trigger} className="h-11 border border-neutral-200 cursor-pointer w-40 button ">
        Demande Anterne{" "}
      </button>
      {
        loading && <LoadingSpinner/>
      }
      <AnimatePresence>
        {open && (
          <div
            onClick={trigger}
            className="inset-0 z-40 fixed bg-neutral-950/15 flex justify-end items-center"
          >
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[80%] flex flex-col justify-between gap-3 h-full p-2.5 bg-white "
            >
              <div className="h-full">
                <div className="">
                  <h1>        Demande Anterne{" "}</h1>
                </div>
                <form
                  onSubmit={handleFrom}
                  className="flex h-[95%] flex-col justify-between gap-2"
                  action=""
                >
                  <div className="grid grid-cols-2 gap-3">


                  <div className="flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-0.5">
                      <span className="text-sm opacity-80">Chantier</span>
                      <input type="text" defaultValue={Project?.name} id="" />
                    </div>
                    
                   
                    <div className="w-full flex flex-col gap-0.5">
                      <span className="text-sm opacity-80">
                        Gestionnaire de ressources{" "}
                      </span>
                      <input
                        type="text"
                        defaultValue={username}
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-full flex flex-col gap-0.5">
                      <span className="text-sm opacity-80">
                        Date de livraison souhaitée
                      </span>
                      <input
                        type="date"
                        defaultValue={username}
                        name="datedelivraison"
                        id=""
                      />
                    </div>
                      <div className="w-full items-start  flex flex-col gap-1.5">
                                       <span className="text-sm opacity-80">Atelier</span>
                                       <select
                                         name="pays"
                                         className="input w-full"
                                         id="datalist-2"
                                       >
                                         {DP.map((country, key) => (
                                           <option key={key} value={country}>
                                             {country}{" "}
                                           </option>
                                         ))}
                                       </select>
                                     </div>
                    <Alert className="h-32" variant="destructive">
                      <User2 />
                      <AlertTitle>Demandeur du chantier!</AlertTitle>
                      <AlertDescription>
                        TGCC Resources envoie automatiquement cette demande au
                        directeur ou au chef de projet{" "}
                      </AlertDescription>
                    </Alert>

                    <div className="w-full flex flex-col gap-0.5">
                      <span>Commentaire</span>
                      <textarea
                        className="w-full rounded-md outline focus:outline-tgcc-400  resize-none  h-30 p-2 border border-neutral-200 "
                        name="commentaire"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="w-full flex flex-col gap-0.5">
                      <span className="text-sm opacity-80"> Code Article</span>
                      <input type="text" name="code" id="" />
                    </div>
                     <div className="w-full flex flex-col gap-0.5">
                      <span className="text-sm opacity-80"> Libellé</span>
                      <input type="text" name="quantite" id="" />
                    </div>
                     <div className="w-full flex flex-col gap-0.5">
                      <span className="text-sm opacity-80">Unité</span>
                      <input type="text" name="quantite" id="" />
                    </div>
                     
                     <div className="w-full flex flex-col gap-0.5">
                      <span className="text-sm opacity-80">Quantité</span>
                      <input type="text" name="quantite" id="" />
                    </div>
                    
                    
                  </div>
                  </div>

                  <div className="flex justify-end items-center w-full">
                    <button className="h-12 cursor-pointer w-50 bg-tgcc-950 text-white rounded-md">
                      Ajoute la demande
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DemandAntern;
