"use client";
import { supabase } from "@/utils/supabase/supabase";
import React, { useEffect } from "react";

export default function Home() {
  const GetSessionDetails = async () => {
    const { data: session, error } = await supabase.auth.getSession();
    console.log("====================================");
    console.log(session);
    console.log("====================================");
  };

  useEffect(() => {
    GetSessionDetails();
  }, []);

  return <div>page</div>;
}
