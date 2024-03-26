"use client";
import { useSupase } from "@/hooks/useSupabase";
import { useUserStore } from "@/utils/stores/userStore";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import ProfileCard from "./nav/ProfileCard";

function LogInButton() {
  const { user, setUser } = useUserStore();
  const { signOut } = useSupase();

  const userLogOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(undefined);
  };

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
