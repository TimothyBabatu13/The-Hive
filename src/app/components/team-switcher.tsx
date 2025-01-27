import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

export function TeamSwitcher() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
            asChild
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
                <Link 
                    href={'/'}
                    className="flex items-center gap-2"
                > 
                    <Image 
                        width={50}
                        height={50}
                        src={'/logo.PNG'}
                        alt="logo"
                    />
                    <span className="text-lg font-bold">Truthmatrix</span>
                </Link>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
