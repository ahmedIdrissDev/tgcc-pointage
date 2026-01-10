import { File } from 'lucide-react';
import { AnimatePresence , motion } from 'motion/react';
import React, { useState } from 'react'

const ConsultationButton = ({url}:{url:string}) => {
    const [open, setopen] = useState<Boolean>(false);
      const trigger = () => (open ? setopen(false) : setopen(true));
  return (
    <>
  <button
        onClick={trigger}
        className="button h-11  w-40 items-center  text-sm  border justify-center border-neutral-200 rounded-md"
      >
        <File/>
        Consultation
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={trigger}
            className="inset-0 z-40 fixed p-10 bg-neutral-950/15 flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-start flex-col justify-between gap-2 h-full p-2.5 bg-white rounded-md"
            >
              <div className="w-full">
                <h2 className='text-2xl'>PDF</h2>
                <p> Consultation</p>
              </div>
              
<iframe 
    className='w-full rounded-md h-full' 
    src={`https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`}
  ></iframe>
           </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ConsultationButton