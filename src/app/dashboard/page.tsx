import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    // Redirect to main page if not authenticated
    setTimeout(redirect("/sign-in"), 10000);
    return <div>Unauthorized</div>;
  }
  return <div>DashboardPage</div>;
}
