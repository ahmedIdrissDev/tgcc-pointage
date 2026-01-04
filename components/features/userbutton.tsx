"use client";
import { ChevronsUpDown } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Userbutton = () => {
  const [open, setopen] = useState<Boolean>(false);
  const trigger = () => (open ? setopen(false) : setopen(true));

  const { data } = useSession();
  const user = data?.user;
  return (
    <>
      <div
        onClick={trigger}
        className="flex bg-white items-center  text-sm  border justify-between p-2 cursor-pointer gap-1.5 min-h-12 border-neutral-200 rounded-md"
      >
        <div className="flex items-center gap-1.5">
          <Image
            src={"/icons/user-Profile.png"}
            className="w-10 h-10 bg-neutral-200 rounded-full"
            width={1000}
            height={1000}
            alt="profile"
          />
          <span> HI {user?.first_name} </span>
        </div>
        <ChevronsUpDown className="text-sm opacity-70" />
      </div>
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
              className="w-1/2 flex flex-col justify-between gap-2 h-96 p-2.5 bg-white rounded-md"
            >
              <div className="">
                <h1>Profile</h1>
                <span>user profile</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Userbutton;
