"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/supabase";
import { useRouter } from "next/navigation";

function Success() {
  const router = useRouter();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data?.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  }
  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <p>SUCCESS</p>
      ) : (
        <p> user is not logged in</p>
      )}
      <button onClick={() => signOutUser()}>sign out</button>
    </div>
  );
}

export default Success;
