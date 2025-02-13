'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

interface SubItem {
  href: string
  title: string
  url?: string
  items?: SubItem[]
}

interface NavItem {
  href?: string
  title: string
  url?: string
  icon?: LucideIcon
  isActive?: boolean
  items?: SubItem[]
}

export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  console.log(pathname, 'papp')

  const renderSubItems = (subItems: SubItem[]) => {
    // console.log(subItems, 'subItems')
    return Object.entries(subItems).map(([key, subItem]) => (
      <Collapsible key={key} className="group/subcollapsible">
        <SidebarMenuSubItem>
          <CollapsibleTrigger asChild>
            <Link href={subItem.href || '#'}>
              <SidebarMenuSubButton isActive={pathname === subItem.href}>
                <span className="text-xs tracking-tight">{subItem.title}</span>
                {subItem.items && subItem.items.length > 0 && (
                  <ChevronRight
                    size={10}
                    className="ml-auto h-2 w-2 transition-transform duration-200 group-data-[state=open]/subcollapsible:rotate-90"
                  />
                )}
              </SidebarMenuSubButton>
            </Link>
          </CollapsibleTrigger>
          {subItem.items && subItem.items.length > 0 && (
            <CollapsibleContent className="w-full">
              <SidebarMenuSub className="">{renderSubItems(subItem.items)}</SidebarMenuSub>
            </CollapsibleContent>
          )}
        </SidebarMenuSubItem>
      </Collapsible>
    ))
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} defaultOpen={false} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <Link href={item.href || '#'}>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon className="mr-2 h-2 w-2" />}
                    <span className="text-xs">{item.title}</span>
                    <ChevronRight
                      size={10}
                      className="ml-auto h-2 w-2 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </Link>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="w-full">
                  {item.items && renderSubItems(item.items)}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
