"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface SideBarProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

export const SidebarItem = ({ href, icon, title }: SideBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;
  return (
    <div
      className={cn(
        " cursor-pointer flex items-center gap-x-2 w-full pl-8 py-6",
        selected
          ? "text-orange-600 border-r-2 border-orange-600 bg-orange-100 dark:bg-zinc-900"
          : "text-slate-500"
      )}
      onClick={() => {
        router.push(href);
      }}
    >
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};
