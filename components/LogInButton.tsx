"use client";
import { useSupase } from "@/hooks/useSupabase";
import { useUserStore } from "@/utils/stores/userStore";
import { supabase } from "@/utils/supabase/supabase";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import ProfileCard from "./nav/ProfileCard";

function LogInButton() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const userLogOut = () => {
    signOut();
    setUser(undefined);
  };
  const { signOut } = useSupase();

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        console.log("SIGNED_IN", session);
        setUser(session?.user || undefined);
      }
      if (event === "SIGNED_OUT") {
        setUser(undefined);
        console.log("SIGNED_OUT", session);
      }
    });

    return () => {
      subscription.data?.subscription.unsubscribe();
    };
  }, [setUser]);

  return (
    <div className=" absolute bottom-0 h-fit p-2">
      {user?.id ? (
        <>
          <ProfileCard /> <button onClick={() => userLogOut()}> Log out</button>
        </>
      ) : (
        <Link href="/login">login</Link>
      )}
    </div>
  );
}

export default LogInButton;
