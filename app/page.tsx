"use client";
import Image from "next/image";
import { supabase } from "@/utils/supabase/supabase";
import { NextResponse } from "next/server";
import Link from "next/link";
import { useSupase } from "@/hooks/useSupabase";
import { useEffect } from "react";
import Sidebar from "@/components/nav/Sidebar";
import LoremIpsum from "@/components/LoremIpsum";
export default function Home() {
  const SetNewView = async () => {
    const { data, error } = await supabase
      .from("views")
      .insert({ name: "test insert" });

    if (data) console.log(data);
    if (error) console.log(error);
  };

  SetNewView();

  return (
    <div className=" flex flex-col">
      <button className=""> Get state</button>
      <LoremIpsum />
      <Link href="/login">login</Link>
    </div>
  );
}
