"use client";
import { useUserStore } from "@/utils/stores/userStore";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect } from "react";

function SessionProvider() {
  const supabase = createClient();
  const setUser = useUserStore((state) => state.setUser);

  const readUserSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    setUser(data.session?.user);
  };

  useEffect(() => {
    readUserSession();
  }, []);

  return <></>;
}

export default SessionProvider;
