"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { ACCOUNTING_ROUTES } from "@/data/accounting/routes"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  title: string
  items?: NavItem[]
}

interface NavSection {
  title: string
  items: NavItem[]
}

export function AccountingNavBar() {
  const pathname = usePathname()

  const isActive = (item: NavItem): boolean => {
    if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
      return true
    }
    return isAnyChildActive(item)
  }

  const isAnyChildActive = (item: NavItem): boolean => {
    if (!item.items) return false
    return item.items.some(
      (subItem) => pathname === subItem.href || pathname.startsWith(`${subItem.href}/`) || isAnyChildActive(subItem),
    )
  }

  const isSectionActive = (section: NavSection): boolean => {
    return section.items.some((item) => isActive(item))
  }

  return (
    <div className="sticky hidden border-b border-topnav-border top-0 z-50 lg:flex h-14 items-center gap-4 w-full pl-10 pr-3 bg-topnav-foreground">
      <NavigationMenu>
        <NavigationMenuList>
          {Object.entries(ACCOUNTING_ROUTES).map(([key, section]) => (
            <NavigationMenuItem key={key}>
              <NavigationMenuTrigger
                className={cn("h-9", isSectionActive(section as NavSection) && "bg-primary text-white")}
              >
                <p className="text-sm font-medium leading-none">{section.title}</p>
              </NavigationMenuTrigger>
              {section.items && section.items.length > 0 && (
                <NavigationMenuContent className="py-4">
                  <ScrollArea>
                    <ul className="grid w-[230px] max-h-[400px] gap-1 py-1 px-3">
                      {section.items.map((item) => (
                        <li key={item.title}>
                          {item.items ? (
                            <div>
                              <h4 className="text-sm font-semibold leading-none px-2">{item.title}</h4>
                              <ul className="grid gap-1 pl-2 py-2">
                                {item.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={subItem.href || "#"}
                                        className={cn(
                                          "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-accent focus:text-accent-foreground",
                                          subItem.href && isActive({ href: subItem.href, title: subItem.title }) && "bg-primary text-white",
                                        )}
                                      >
                                        <div className="text-sm font-normal leading-none p-2">{subItem.title}</div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href || "#"}
                                className={cn(
                                  "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-accent focus:text-accent-foreground",
                                  isActive({ href: item.href ?? "#", title: item.title, items: item.items }) && "bg-accent text-accent-foreground",
                                )}
                              >
                                <div className="text-sm font-medium leading-none p-2">{item.title}</div>
                              </Link>
                            </NavigationMenuLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

