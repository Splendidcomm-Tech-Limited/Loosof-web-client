'use client'
import Link from 'next/link'
import { Bell } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Accountingroutes } from '@/data/accounting/routes'

export function AccountingNavBar() {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
      <NavigationMenu>
        <NavigationMenuList>
          {Object.entries(Accountingroutes).map(([key, section]) => (
            <NavigationMenuItem key={key}>
              <NavigationMenuTrigger className="h-9 active:bg-red-400 ">
                <p className="text-sm font-semibold leading-none text-[#0F172A]">{section.title}</p>
              </NavigationMenuTrigger>
              {section.items && section.items.length > 0 && (
                <NavigationMenuContent className=''>
                  <ul className="grid w-[240px] gap-1 px-5 py-2">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        {item.items ? (
                          <div>
                            <h4 className=" text-sm font-semibold leading-none px-2">
                              {item.title}
                            </h4>
                            <ul className="grid gap-1 px-4 py-2">
                              {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-normal leading-none">
                                        {subItem.title}
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm">Oriental world</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>OW</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
