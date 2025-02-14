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
  items: SubItem[]
}

interface NavItem {
  href: string
  title: string
  icon: LucideIcon
  items: SubItem[]
}



export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  const isActive = (item: NavItem | SubItem): boolean => {
    if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
      return true
    }
    return isAnyChildActive(item)
  }

  const isAnyChildActive = (item: NavItem | SubItem): boolean => {
    if (!item.items) return false
    return Object.entries(item.items).some(
      ([, subItem]) =>
        pathname === subItem.href ||
        pathname.startsWith(`${subItem.href}/`) ||
        isAnyChildActive(subItem)
    )
  }

  const renderSubItems = (subItems: SubItem[]) => {
    return Object.entries(subItems).map(([key, subItem]) => (
      <Collapsible key={key} className="group/subcollapsible" defaultOpen={isActive(subItem)}>
        <SidebarMenuSubItem>
          <CollapsibleTrigger asChild>
            {subItem.href ? (
              <Link href={subItem.href || '#'}>
                <SidebarMenuSubButton isActive={isActive(subItem)}>
                  <span className="text-xs tracking-tight">{subItem.title}</span>
                  {subItem.items && subItem.items.length > 0 && (
                    <ChevronRight
                      size={10}
                      className="ml-auto h-2 w-2 transition-transform duration-200 group-data-[state=open]/subcollapsible:rotate-90"
                    />
                  )}
                </SidebarMenuSubButton>
              </Link>
            ) : (
              <SidebarMenuSubButton isActive={isActive(subItem)}>
                <span className="text-xs tracking-tight">{subItem.title}</span>
                {subItem.items && subItem.items.length > 0 && (
                  <ChevronRight
                    size={10}
                    className="ml-auto h-2 w-2 transition-transform duration-200 group-data-[state=open]/subcollapsible:rotate-90"
                  />
                )}
              </SidebarMenuSubButton>
            )}
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
          <Collapsible key={item.href} defaultOpen={isActive(item)} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <Link href={item.href || '#'}>
                  <SidebarMenuButton isActive={isActive(item)} tooltip={item.title}>
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
