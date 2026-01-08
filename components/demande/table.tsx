"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ContextStoreDataProvider } from "@/Context";
import { Id } from "@/convex/_generated/dataModel";
import { GestionnaireDemande } from "@/types";
import { useSession } from "next-auth/react";
import Buttonaction from "../stock/ui/button-action";
import { Badge } from "../ui/badge";

const TableContainer = () => {
  const { Project } = ContextStoreDataProvider();
  const id = (Project?._id || "") as Id<"Project">;
  const GetDemande = (useQuery(
    api.stock.QueryDemande,
    id ? { project_id: id } : "skip"
  ) || []) as GestionnaireDemande[];
  const { data } = useSession();
  const Role = data?.user.role;
  return (
    <div className="button p-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Code Article</TableHead>
            <TableHead>Quantite</TableHead>
            <TableHead>commentaire</TableHead>
            <TableHead>Gestionnaire</TableHead>
            <TableHead className="text-right">date delivraison</TableHead>
            <TableHead className="text-right">validation</TableHead>
            <TableHead className="text-right">Type de demande</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {GetDemande.map(({ Gestionnaire, data, Project }, key) => (
            <TableRow className="" key={key}>
              <TableCell className="font-medium">{data.code} </TableCell>
              <TableCell>{data.quantite} </TableCell>
              <TableCell>{data.commentaire} </TableCell>
              <TableCell>{Gestionnaire} </TableCell>

              <TableCell className="text-right">
                {data.datedelivraison}{" "}
              </TableCell>
              <TableCell className="text-right">
                {!data.validation ? (
                  <Badge variant={"secondary"}>EN-COURS </Badge>
                ) : (
                  <Badge variant={"secondary"}>ACCEPTÉE </Badge>
                )}{" "}
              </TableCell>
              <TableCell className="text-right"> ACHATE </TableCell>
              <TableCell className="text-right">
                <Buttonaction />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableContainer;
