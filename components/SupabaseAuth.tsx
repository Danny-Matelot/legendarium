"use client";

import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";
import { supabase } from "@/utils/supabase/supabase";
import { useRouter } from "next/navigation";

export const SubaseAuth = () => {
  const router = useRouter();

  const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
    console.log("auth state changed: ");
    console.log(event, session);

    if (event === "INITIAL_SESSION") {
    } else if (event === "SIGNED_IN") {
      //router.push("/login/success");
    } else if (event === "SIGNED_OUT") {
      // handle sign out event
      router.push("/signout");
    } else if (event === "PASSWORD_RECOVERY") {
      // handle password recovery event
    } else if (event === "TOKEN_REFRESHED") {
      // handle token refreshed event
    } else if (event === "USER_UPDATED") {
      // handle user updated event
    }
  });
  // data.subscription.unsubscribe();
  return (
    <div className=" bg-slate-900/20 p-3 max-w-72 mx-auto my-16 text-white">
      <Link className="  text-white  text-end" href="/">
        Return to home
      </Link>

      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "red",
                brandAccent: "darkred",
              },
            },
          },
          extend: true,
          className: {
            container: " mx-4 px-4 rounded-xl text-white",
          },
        }}
        socialLayout="horizontal"
        providers={["google"]}
        theme="dark"
        redirectTo="http://localhost:3000/login/success"
      />
    </div>
  );
};
