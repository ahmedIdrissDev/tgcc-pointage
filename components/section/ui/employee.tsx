"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, SearchAlert } from "lucide-react";
import { ContextStoreDataProvider } from "@/Context";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const Employee = () => {
  const { data } = ContextStoreDataProvider();
  const Present =
    data?.filter(
      ({ present, type }) => present == false && type == "Mensuel"
    ) || [];
  return (
    <div>
      <div className="py-2">
        <span>Suivi du pointage Mensuel</span>
      </div>
      <ScrollArea className="h-full py-2 flex flex-col space-x-2.5 button w-full rounded-md  ">
      {Present.length > 0 &&
          <Alert className="bg-tgcc-500/5" variant="destructive">
          <SearchAlert />
          <AlertTitle>Suivi </AlertTitle>
          <AlertDescription>
            Merci de valider le pointage mensuel.
          </AlertDescription>
        </Alert>
      }
      {!!Present &&
      
        <div className="flex h-90 flex-col gap-2  w-full justify-center items-center">
          <Image
                      src={"/icons/thanks.svg"}
                      className=" opacity-100 w-50 "
                      width={1000}
                      height={1000}
                      alt="profile"
                    />
                    <p>Merci pour la validation.</p>

        </div>
      }
        {Present &&
                    
            <div className="button mt-1">

        <Table className="mt-2">
          <TableBody>
            
            {Present.map(
              ({ number_id, first_name, last_name, type,  }, key) => (
                <TableRow key={key}>
                  <TableCell className="font-medium">{number_id} </TableCell>

                  <TableCell className="font-medium">{last_name} </TableCell>
                  <TableCell>{first_name} </TableCell>
                  <TableCell>{type}</TableCell>
                  <TableHead>
                        <AlertCircle className="text-red-500"/>
      
                               </TableHead>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
                  </div>        

      
      }
      </ScrollArea>
    </div>
  );
};

export default Employee;
