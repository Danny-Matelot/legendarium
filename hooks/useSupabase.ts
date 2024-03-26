import { createClient } from "@/utils/supabase/client";
import { access } from "fs";

export const useSupase = () => {
  const supabase = createClient();
  const getSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    const { access_token, refresh_token }: any = session;
    await setSession(access_token, refresh_token);
    return session;
  };

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    return data;
  };

  const setSession = async (access_token: string, refresh_token: string) => {
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    return true;
  };

  const refreshSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.refreshSession();
    return session;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return {
    setSession,
    refreshSession,
    getSession,
    getUser,
    signOut,
  };
};
