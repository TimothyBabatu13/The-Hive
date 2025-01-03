'use client';

import { Button } from "@/components/ui/button";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const GetStartedButton = () => {
    const router = useRouter();
    return(
        <Button
            onClick={()=> router.push('/chat')}
            style={{background: 'rgb(209, 153, 0)'}} 
            className="inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0   text-neutral-50 hover:bg-brand-600/90 dark:hover:bg-brand-600/90 h-9 px-4 py-2 bg-[#D19900]"
            >
                Get Started
        </Button>
    )
}

export const LogoutButton = () => {
    return(
    <SidebarMenu>
        <SidebarMenuItem>
            <SidebarMenuButton
                tooltip={'Log in'}
                style={{background: 'transparent', color: 'rgb(209, 153, 0)', borderColor:'rgb(209, 153, 0)'}}
                className={cn(" shadow inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 bg-brand-600 dark:bg-brand-600 text-neutral-50 hover:bg-brand-600/90 dark:hover:bg-brand-600/90 h-9 px-4 py-2 peer/menu-button flex items-center overflow-hidden rounded-md p-2 text-left outline-none transition-all duration-300 ease-in-out hover:text-sidebar-active focus-visible:ring-2 active:text-sidebar-foreground-accent disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium data-[active=true]:text-sidebar-active data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-active group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 border border-brand-600 text-brand-600 hover:bg-brand-600/10 h-8 text-sm w-full justify-center gap-0")}
            >
                <LogIn />
                <span className="text-sm  font-bold ml-2 ">Log in</span>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>        
    )
}

export const NavBarLink = ({ url, icon, title } : {
    url: string,
    title: string,
    icon: React.ReactNode
}) => {
    return(
        <Link 
            href={url}
            className="flex gap-2"
        >
            {icon}
            <span className="text-sm">{title}</span>
        </Link>
    )
}



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
                        width={32}
                        height={32}
                        src={'/logo-dark.webp'}
                        alt="logo"
                    />
                    <span className="text-lg font-bold">The Hive</span>
                </Link>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
