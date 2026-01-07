"use client"
import { ContextStoreDataProvider } from '@/Context';
import { AnimatePresence , motion } from 'motion/react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { User2 } from 'lucide-react';
const DemandButton = () => {
    const [open, setopen] = useState<Boolean>(false);
      const trigger = () => (open ? setopen(false) : setopen(true));
      const {Project} = ContextStoreDataProvider() 
      const {data} = useSession()
      const username= `${data?.user?.first_name.trim().toLocaleLowerCase()}.${data?.user?.last_name.toLocaleLowerCase()}`
      console.log(username)
  return (
    <>
    <button onClick={trigger} className="h-11 cursor-pointer w-40 button ">
        Demande d’article{" "}
      </button>
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
              className="w-1/2 flex flex-col justify-between gap-3 h-full p-2.5 bg-white "
            >
            <div>
              <div className="">
                <h1>Demande d’article</h1>
              </div>
              <form className='flex flex-col gap-2' action="">
                <div className="flex flex-col gap-2">
    
                <div className='w-full flex flex-col gap-0.5'>
                    <span>Chantier</span>
                <input type="text" defaultValue={Project?.name} name="" id="" />
                </div>
                <div className='w-full flex flex-col gap-0.5'>
                    <span> Code Article</span>
                <input type="text" name="" id="" />
                </div>
                 <div className='w-full flex flex-col gap-0.5'>
                    <span> Quantité</span>
                <input type="text" name="" id="" />
                </div>
                 <div className='w-full flex flex-col gap-0.5'>
                    <span>Gestionnaire de ressources </span>
                <input type="text" defaultValue={username} name="" id="" />
                </div>
                 <div className='w-full flex flex-col gap-0.5'>
                    <span>Date de livraison souhaitée</span>
                <input type="date" defaultValue={username} name="" id="" />
                </div>
                <Alert variant="destructive">
  <User2 />
  <AlertTitle>Demandeur du chantier!</AlertTitle>
  <AlertDescription>
TGCC Resources envoie automatiquement cette demande au directeur ou au chef de projet  </AlertDescription>
</Alert>
                
                 <div className='w-full flex flex-col gap-0.5'>
                    <span>Commentaire</span>
                    <textarea className='w-full rounded-md outline focus:outline-tgcc-400  resize-none  h-30 p-2 border border-neutral-200 ' name="input" id=""></textarea>
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
  )
}

export default DemandButton