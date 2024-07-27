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
      <div className='flex'>
        <SidebarComponent>
          <SidebarItem
            href='/creator/profile'
            title='Profile'
            icon={<UserRoundPen />}
          />
          <SidebarItem
            href='/creator/courses'
            title='Courses'
            icon={<Goal />}
          />
          <SidebarItem
            href='/creator/analytics'
            title='Analytics'
            icon={<BarChart3 />}
          />
        </SidebarComponent>
        {children}
      </div>
    </div>
  );
}
