'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "./hooks/useIsAuthed";

export default function Page() {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    console.log("isAuth:", isAuth);
    if (isAuth) {
      console.log("Redirigiendo a /home");
      router.push('/home');
    } else {
      console.log("Redirigiendo a /landing");
      router.push('/landing');
    }
  }, [isAuth, router]);

  return null;
}
