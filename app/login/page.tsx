"use client";
import { createClient } from "@/utils/supabase/client";
import { login, signup } from "./actions";
import { usePathname } from "next/navigation";

export default function LoginPage() {
  const supabaseClient = createClient();
  const pathname = usePathname();
  console.log(pathname);
  const loginWithGoogle = () => {
    supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + "/",
      },
    });
  };
  return (
    <div className="flex flex-col w-full ">
      <button onClick={loginWithGoogle}>Signin with google</button>
      <form className="flex flex-col w-full ">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
