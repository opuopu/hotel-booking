"use client";
import React, { useState } from "react";
import SideBar from "@/components/sidebar";
import styles from "./dashboard.module.css";
import {
   TbLayoutSidebarRightExpand,
   TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   const [isOpen, setIsOpen] = useState<boolean>(true);

   return (
      <div className="flex min-h-screen relative ">
         <SideBar isOpen={isOpen}></SideBar>
         {/* {isOpen && <div className="min-w-[200px] duration-500 translate-all"></div>} */}
         <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`absolute text-red-500  z-[9999] text-xl font-medium hover:text-red-500 ${
               isOpen ? " top-0 left-[200px] " : "left-20px"
            }`}
         >
            {isOpen ? (
               <TbLayoutSidebarRightExpand
                  size={30}
               ></TbLayoutSidebarRightExpand>
            ) : (
               <TbLayoutSidebarRightExpand
                  className={`rotate-180`}
                  size={30}
               ></TbLayoutSidebarRightExpand>
            )}
         </div>
         <div
            className={`${styles.dashBoardLayout} w-full p-7 duration-300 transition-all ease-in-out`}
         >
            {children}
         </div>
      </div>
   );
};

export default DashboardLayout;
