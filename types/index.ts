import { Id } from "@/convex/_generated/dataModel";

export interface Attendance {
  _creationTime: number;
  _id: string;
  check_in: string;
  check_out: string;
  employee_id: string;
  project_id: string;
  work_date: string;
  status:boolean ;
}

export type documents = {
  user_Id: Id<"user">;
  date?: string;
  type: "CIN" | "RIB" | "CNSS" | "CV";
  employee_id: Id<"Employee">;
  doc_url: string;
};
export interface Employee {
  _creationTime: number;
  _id: Id<"Employee">;
  first_name: string;
  last_name: string;
  number_id: number;
  project_id: string;
  status: "Actif" | "Inactif";
  type: "Quinzainier" | "Mensuel";
}

export interface Project {
  _creationTime: number;
  _id: Id<"Project">;
  name: string;
  users: string[];
}

export interface EmployeeDataTypes {
  Attendance: Attendance[];
  employee: Employee;
  project_id: Project;
  documents:documents[]
}

export interface PointgaeTypes {
     employee: Employee;
     project_id: Project;
     status:boolean  ;
     error:string 
}
export type EmployeeStoreType = {
  _id: string;
  _creationTime: number; 
  first_name: string;
  last_name: string;
  number_id: number;
  present: boolean;
  project_id: string;
  status: "Actif" | "Inactif";
  type: "Quinzainier" | "Mensuel";
};

export interface ContextStoreProvider {
  data:EmployeeStoreType[] ;
  setdata: (data:EmployeeStoreType[])=> void ;
  Project:Project ;
  setProject: (args:Project) => void 
}


export interface GestionnaireDemande {
  Gestionnaire: string;

  Project: {
    _creationTime: number;
    _id: Id<"user">;
    first_name: string;
    last_name: string;
    password: string;
    role: "Admin" | "User";
    username: string;
  };

  data: {
    _creationTime: number;
    _id: Id<"Demande">;
    code: string;
    commentaire: string;
    datedelivraison: string;
    project_id: Id<"Project">;
    quantite: string;
    validation:true | false
    user_Id: Id<"user">;
  };
}
