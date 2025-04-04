"use server";

import { signUp } from "@/lib/services/auth";

export const signUpUser = async (formData: FormData) => {
  const email = formData.get("pk_fk_email") as string;
  const password = formData.get("password") as string;

  try {
    const result = await signUp({ email, password });
    return { success: true, data: result };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
};
