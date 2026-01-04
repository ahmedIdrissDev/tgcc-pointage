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


export interface Employee {
  _creationTime: number;
  _id: string;
  first_name: string;
  last_name: string;
  number_id: number;
  project_id: string;
  status: "Actif" | "Inactif";
  type: "Quinzainier" | "Mensuel";
}

export interface Project {
  _creationTime: number;
  _id: string;
  name: string;
  users: string[];
}

export interface EmployeeDataTypes {
  Attendance: Attendance[];
  employee: Employee;
  project_id: Project;
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
  data:EmployeeStoreType[] ,
  setdata: (data:EmployeeStoreType[])=> void
}