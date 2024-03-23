"use client";
import { createClient } from "@/utils/supabase/client";
import { login, signup } from "./actions";
import { useRouter, usePathname } from "next/navigation";
import { FormEvent } from "react";
import { SubaseAuth } from "@/components/SupabaseAuth";

export default function LoginPage() {
  const supabaseClient = createClient();
  const pathname = usePathname();
  const loginWithGoogle = () => {
    supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  //TODO: solve why state isn't updated when login with password, and remove the following code
  const router = useRouter();
  const loginWithPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    await supabaseClient.auth.signInWithPassword({
      email: target.email.value,
      password: target.password.value,
    });

    router.push("/");
  };

  return (
    <div className="flex flex-col w-full ">
      <button onClick={loginWithGoogle}>Signin with google</button>
      <form onSubmit={loginWithPassword} className="flex flex-col w-full ">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />

        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
        <button type="submit">Signin with clientside</button>
      </form>

      <br />
      <br />

      {/* <SubaseAuth /> */}
    </div>
  );
}
