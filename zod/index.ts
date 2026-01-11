import { z } from "zod";

const employeeSchema = z.object({
  first_name: z.string().min(3, { message: "Le prénom doit contenir au moins 3 caractères." }),
  last_name: z.string().min(3, { message: "Le nom doit contenir au moins 3 caractères." }),
  type: z.enum(["Quinzainier", "Mensuel"], { message: "Le type doit être 'Quinzainier' ou 'Mensuel'." }),
  cin: z.string().min(3, { message: "Le CIN doit contenir au moins 3 caractères." }),
  date_naissance: z.string().min(3, { message: "La date de naissance est invalide." }),
  nationalite: z.string().min(3, { message: "La nationalité doit contenir au moins 3 caractères." }),
  adresse: z.string().min(5, { message: "L'adresse doit contenir au moins 5 caractères." }),
  ville: z.string().min(3, { message: "La ville doit contenir au moins 3 caractères." }),
  pays: z.string().min(3, { message: "Le pays doit contenir au moins 3 caractères." }),
  telephone: z
    .string()
    .min(7, { message: "Le numéro de téléphone doit contenir au moins 7 chiffres." })
    .regex(/^\d+$/, { message: "Le téléphone ne doit contenir que des chiffres." }),
  tgcc_role: z.string().min(3, { message: "Le rôle TGCC doit contenir au moins 3 caractères." }),
  tgcc_statu: z.string().min(3, { message: "Le statut TGCC doit contenir au moins 3 caractères." }),
});


export {employeeSchema}