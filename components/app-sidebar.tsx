'use client'

import * as React from 'react'

import { NavMain } from '@/components/nav-main'
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { sidebarData } from '@/data/sidebar'

import { GalleryVerticalEnd } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'

// This is sample data.

export function AppSidebar({ children, ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = sidebarData
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              {/* <div className="font-bold text-primary">Loosof Erp</div>/ */}
            </a>
          </div>
        </SidebarHeader>

        <SidebarContent className="">
          <ScrollArea>
            <NavMain items={data.navMain} />
          </ScrollArea>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="flex flex-col h-screen  items">
        <div className="absolute">
          <SidebarTrigger />
        </div>
        <div className="">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
