"use client";
import { createClient } from "@/utils/supabase/client";
import { login, signup } from "./actions";
import { useRouter, usePathname } from "next/navigation";
import { FormEvent } from "react";
import { SubaseAuth } from "@/components/SupabaseAuth";

export default function LoginPage() {
  const supabaseClient = createClient();
  const pathname = usePathname();
  const router = useRouter();

  const loginWithGoogle = () => {
    supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  const loginWithPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: target.email.value,
      password: target.password.value,
    });

    router.replace("/");
  };

  return (
    <div className="flex flex-col w-full ">
      <button onClick={loginWithGoogle}>Signin with google</button>
      <form onSubmit={loginWithPassword} className="flex flex-col w-full ">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />

        <button type="submit">Log in</button>
        <button formAction={signup}>Sign up</button>
        <button type="submit">Signin with clientside</button>
      </form>
    </div>
  );
}
