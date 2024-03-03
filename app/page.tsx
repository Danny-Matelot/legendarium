import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import Link from "next/link";
export default function Home() {
  const SetNewView = async () => {
    const { data, error } = await supabase
      .from("views")
      .insert({ name: "test insert" });

    if (data) console.log(data);
    if (error) console.log(error);
  };

  const GetSessionDetails = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
  };

  SetNewView();
  GetSessionDetails();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Link href="/login">login</Link>
    </main>
  );
}
