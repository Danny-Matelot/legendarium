"use client";
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
    const { data } = await supabase.auth.getUser();
    console.log(data);
  };

  SetNewView();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <button onClick={() => GetSessionDetails()}> Get state</button>
      <Link href="/login">login</Link>
    </main>
  );
}
