import { z } from "zod";

export const authSchema = z.object({
  pk_fk_email: z.string().trim().email({ message: "Invalid email entered." }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long." }),
});
