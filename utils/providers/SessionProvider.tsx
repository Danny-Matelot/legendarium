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
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      console.log("SESSION_PROVIDER", event);
      setUser(session?.user || undefined);

      if (event === "INITIAL_SESSION") {
        // handle initial session
      } else if (event === "SIGNED_IN") {
        setUser(session?.user);
      } else if (event === "SIGNED_OUT") {
        // handle sign out event
        setUser(undefined);
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        setUser(session?.user);
      } else if (event === "USER_UPDATED") {
        setUser(session?.user);
      }
    });

    return () => {
      subscription.data.subscription.unsubscribe();
    };

    readUserSession();
  }, []);

  return <></>;
}

export default SessionProvider;
