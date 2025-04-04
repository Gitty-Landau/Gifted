import supabase from "../db/supabase";

export const getImageByPath = (path: string) =>
  supabase.storage.from("images").getPublicUrl(path).data.publicUrl;
