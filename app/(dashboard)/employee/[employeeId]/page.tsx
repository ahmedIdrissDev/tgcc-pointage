"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { EmployeeDataTypes } from "@/types";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Barcode from 'react-barcode';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight, SquarePen } from "lucide-react";
import EditButton from "@/components/features/edit";
import Loading from "@/components/section/ui/loading";
const page = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { employeeId } = useParams<{ employeeId: Id<"Employee"> }>();
  const id = employeeId;

  const data: EmployeeDataTypes = useQuery(api.function.getEmaployee, { id });
  if (!data)
    return (
     <Loading/>
    );
  const { Attendance, employee, project_id: chantier } = data;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between w-full">
        <div className="py-2.5">
          <h1 className="text-[17px] ">Profile</h1>
          <p className="text-sm flex items-center gap-2">RH <ChevronRight/> Consultation <ChevronRight/>  Détail Salaries .</p>
        </div>
        <EditButton {...employee} />
      </div>

      <div className="w-full grid grid-cols-3 h-40 border border-neutral-100  rounded-md bg-white p-2 ">
        <div className="w-full flex flex-col gap-1 h-20">
          <h2 className="opacity-80">Matricule</h2>
          <span className="text-sm">{employee.number_id} </span>
        </div>
        <div className="w-full flex flex-col gap-1 h-20">
          <h2 className="opacity-80">Prenom</h2>
          <span className="text-sm">{employee.last_name} </span>
        </div>
        <div className="w-full flex flex-col gap-1 h-20">
          <h2 className="opacity-80">Nom</h2>
          <span className="text-sm">{employee.last_name} </span>
        </div>
        <div className="w-full flex flex-col gap-1 h-20">
          <h2 className="opacity-80">type</h2>
          <span className="text-sm">{employee.type} </span>
        </div>
        <div className="w-full flex flex-col gap-1 h-20">
          <h2 className="opacity-80">Etat</h2>
          <span className="text-sm">{employee.status} </span>
        </div>
      </div>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className={"flex flex-col h-dvh gap-2"}
      >
        <TabList
          className={
            "flex h-14 py-3 px-2 bg-tgcc-600 rounded-md  items-center gap-2"
          }
        >
          <Tab
            className={
              "button shadow-none rounded-md border-0 focus-within:bg-neutral-950 focus-within:text-white outline-0 h-10 w-30"
            }
          >
            Chantier
          </Tab>
          <Tab
            className={
              "button shadow-none rounded-md border-0 focus-within:bg-neutral-950 focus-within:text-white outline-0 h-10 w-30"
            }
          >
            Précoces
          </Tab>
          <Tab
            className={
              "button shadow-none rounded-md border-0 focus-within:bg-neutral-950 focus-within:text-white outline-0 h-10 w-30"
            }
          >
            badges
          </Tab>
          <Tab
            className={
              "button shadow-none rounded-md border-0 focus-within:bg-neutral-950 focus-within:text-white outline-0 h-10 min-w-30"
            }
          >
            {" "}
            Fichier de paie
          </Tab>
        </TabList>
        <TabPanel>
          <div className=" w-full h-dvh">
            <div className="w-full justify-between button  h-12">
              <span>{chantier.name} </span>
              <button className="button h-10 w-40">désaffecté</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" border border-neutral-200 rounded-md w-full h-dvh">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">chantier</TableHead>
                  <TableHead>Matricule</TableHead>
                  <TableHead>Heure d’entrée</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Heure de sortie</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Attendance.map(({ check_in, check_out, work_date ,project_id:chantier }, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {chantier}{" "}
                    </TableCell>

                    <TableCell className="font-medium">
                      {employee.number_id}{" "}
                    </TableCell>
                    <TableCell>{check_in} </TableCell>
                    <TableCell>{work_date} </TableCell>
                    <TableCell className="text-right">{check_out} </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="bg-neutral-50 w-full h-dvh">
              <Barcode className="w-72 h-12" value={employee.number_id} />,
          </div>{" "}
        </TabPanel>
        <TabPanel>
          <div className="bg-neutral-50 w-full h-dvh">
            <h2>Any content 4</h2>
          </div>{" "}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default page;
