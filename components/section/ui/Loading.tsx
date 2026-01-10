import React from 'react'
import { AnimatePresence, motion } from "motion/react";
import { Spinner } from '@/components/ui/spinner';

const LoadingSpinner = () => {
  return (
    
 <div className="w-full z-50 h-full fixed inset-0 bg-neutral-900/10 flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 10 }}
                    className="w-70 rounded-md p-3 min-h-11 bg-white flex items-center gap-1.5"
                  >
                    <Spinner />
                    <span> Un moment, s’il vous plaît..</span>
                  </motion.div>
                </div>  )
}

export default LoadingSpinner