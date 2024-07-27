import Appbar from "@/components/appbar";
import SidebarComponent from "@/components/sidebar-component";
import { SidebarItem } from "@/components/sidebar-item";
import db from "@/lib/db";
import { BarChart3, Goal, UserRoundPen } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
}
