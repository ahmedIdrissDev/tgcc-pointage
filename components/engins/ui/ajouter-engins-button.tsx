'use client'
import { CloudUpload } from 'lucide-react';
import { AnimatePresence , motion } from 'motion/react';
import React, { FormEvent, useState } from 'react'

const AjouterEnginsbutton = () => {
      const [open, setopen] = useState<Boolean>(false);
      const trigger = () => (open ? setopen(false) : setopen(true));

       const handleFrom = async (e: FormEvent<HTMLFormElement>) => {
          try {
           
          } catch (error) {
            console.log(error);
          }
        };
      
  return (
   <>
   <button onClick={trigger} className="h-11 cursor-pointer w-40 button bg-neutral-100">
        Ajouter Engine{" "}
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
              className="w-1/2 flex flex-col  gap-3 h-[700px] p-2.5 bg-white "
            >
                <div className="">
                  <h1>Demande d’article</h1>
                </div>
                <form
                  onSubmit={handleFrom}
                  className="flex h-full  flex-col justify-between gap-2"
                  action=""
                >
                  <div className="">

                  <div className="flex flex-col gap-1">
                    <span className='opacity-80 text-sm'>Code engin </span>
                    <input type="text" />
                  </div>
                   <div className="flex flex-col gap-1">
                    <span className='opacity-80 text-sm'>Anne dz fabriction </span>
                    <input type="date" />
                  </div>
                   <div className="flex flex-col gap-1">
                    <span className='opacity-80 text-sm'>Module </span>
                    <input type="text" />
                  </div>
                   <div className="flex flex-col gap-1">
                    <span className='opacity-80 text-sm'>Carnnet d'entretien </span>
                    <input type="text" />
                  </div>
                   <div className="flex flex-col gap-1">
                    <span className='opacity-80 text-sm'>Assuance </span>
                    <input type="text" />
                  </div>
                  <label htmlFor="file">
                    <span>Other</span>
                  <div className="flex border rounded-md cursor-pointer hover:border-tgcc-500 h-20 border-dashed bg-tgcc-50 justify-center items-center w-full flex-col gap-1.5">
                    <CloudUpload className="opacity-70" />
                    <span className="text-sm opacity-70">select pdf documents</span>
                    <input
                      hidden
                      className="w-full appearance-none  rounded-md h-11 border border-neutral-200 px-2"
                      type="file"
                      accept=".pdf"
                      id="file"
                      placeholder=""
                    />{" "}
                  </div>
                </label>
                                  </div>

                  <div className="flex justify-end items-center w-full">
                    <button className="h-12 cursor-pointer w-50 bg-tgcc-600 text-white rounded-md">
                      Ajoute la demande
                    </button>
                  </div>
                </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
   </>
)
}

export default AjouterEnginsbutton