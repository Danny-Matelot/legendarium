"use client";
import { useSupase } from "@/hooks/useSupabase";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

import React, { useEffect, useState } from "react";

function LogInButton() {
  const { signOut, getUser, getSession } = useSupase();

  const [data, setData] = useState<any>();
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const test = await getSession();
        setData(test);
        console.log("test");
      } catch (error) {
        console.log(error);
      }
    };
    fetchSession();
  }, []);

  return (
    <div className=" absolute bottom-0 h-fit p-2">
      <button className="" onClick={() => console.log(data?.user)}>
        {data?.user.aud == "authenticated" ? (
          <button onClick={() => signOut()}> Sign Out</button>
        ) : (
          <Link href="/login">login</Link>
        )}
      </button>
    </div>
  );
}

export default LogInButton;
