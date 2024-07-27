"use client";

import { Bird, LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { ModeToggle } from "@/components/mode-toggle";
import { useRouter, usePathname } from "next/navigation";

function Appbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='border-b h-[68px] flex items-center'>
      <div className='px-8 w-full flex justify-between items-center'>
        <Link href='/browse'>
          <div className='flex justify-center items-center gap-x-1 font-bold'>
            <Bird className='text-orange-600' />
            <div className='text-2xl'>Skillify</div>
          </div>
        </Link>
        <div>
          <div className='flex gap-x-3'>
            <SignedOut>
              <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
            </SignedOut>
            <SignedIn>
              <div className='flex justify-center gap-x-4 items-center'>
                {!(
                  pathname.startsWith("/creator") ||
                  pathname.startsWith("/instructor")
                ) ? (
                  <div
                    className='hover:underline cursor-pointer transition text-orange-600'
                    onClick={() => {
                      router.push("/creator/courses");
                    }}
                  >
                    CreatorMode
                  </div>
                ) : (
                  <div
                    className='hover:underline cursor-pointer transition text-orange-600'
                    onClick={() => {
                      router.push("/dashboard");
                    }}
                  >
                    <div className='flex gap-x-1 justify-center items-center'>
                      <LogOut size={18} />
                      <div className='text-lg'>Exit</div>
                    </div>
                  </div>
                )}
                <UserButton
                  appearance={{
                    baseTheme: [dark, neobrutalism],
                    elements: {
                      avatarBox: "h-[38px] w-[38px]",
                      userButtonPopoverActionButton: "text-orange-600",
                    },
                  }}
                />
              </div>
            </SignedIn>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
