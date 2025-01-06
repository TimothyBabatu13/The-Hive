"use client"

import * as React from "react"
import {
  Book,
  ChartCandlestick,
  ChartLine,
  ContactRound,
  MessageSquare,
  Twitter,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-switcher"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { LogoutButton } from "./buttons"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Chat",
      url: "/chat",
      icon: MessageSquare,
      isActive: true,
    },
    {
      title: "Docs",
      url: "/chat/docs",
      icon: Book,
    },
    {
      title: "Follow Us",
      url: "#",
      icon: Twitter,
    },
  ],
  projects: [
    {
      name: "Market Agent",
      url: "#",
      icon: ChartLine,
    },
    {
      name: "Trading Agent",
      url: "#",
      icon: ChartCandlestick,
    },
    {
      name: "Social Agent",
      url: "#",
      icon: ContactRound,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
        <LogoutButton />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
    </Sidebar>
  )
}
