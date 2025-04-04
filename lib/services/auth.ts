"use server";

import supabase from "../db/supabase";

export const getUser = async () => await supabase.auth.getUser();

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => await supabase.auth.signInWithPassword({ email, password });

export const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  "use server";
  return await supabase.auth.signUp({ email, password });
};

export const signOut = async () => await supabase.auth.signOut();
