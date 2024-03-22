import { supabase } from "@/utils/supabase/supabase";
import { access } from "fs";

export const useSupase = () => {
  const getSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    const { access_token, refresh_token }: any = session;
    await setSession(access_token, refresh_token);
    console.log(session);
    return session;
  };

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    console.log(data);
    return data;
  };

  // TODO: remove testgetSession
  const testgetSession = async () => {
    return await supabase.auth.getSession();
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
    console.log("Signout");
  };

  return {
    setSession,
    refreshSession,
    getSession,
    getUser,
    testgetSession,
    signOut,
  };
};
