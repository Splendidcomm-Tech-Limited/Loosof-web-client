'use client'
import Link from 'next/link'


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { Accountingroutes } from '@/data/accounting/routes'
import { ScrollArea } from '@/components/ui/scroll-area'

export function AccountingNavBar() {
  return (
    <div className="sticky hidden border-b border-topnav-border  top-0 z-50 lg:flex h-14 items-center gap-4  w-full pl-10 pr-3 bg-topnav-foreground">
      <NavigationMenu>
        <NavigationMenuList>
          {Object.entries(Accountingroutes).map(([key, section]) => (
            <NavigationMenuItem key={key}>
              <NavigationMenuTrigger className="h-9  ">
                <p className="text-sm font-medium leading-none ">{section.title}</p>
              </NavigationMenuTrigger>
              {section.items && section.items.length > 0 && (
                <>
                  <NavigationMenuContent className="py-4">
                  

                    <ScrollArea>
                      <ul className="grid w-[230px] max-h-[400px]  gap-1 py-1 px-3">
                        {section.items.map((item) => (
                          <li key={item.title}>
                            {item.items ? (
                              <div>
                                <h4 className=" text-sm font-semibold leading-none px-2">
                                  {item.title}
                                </h4>
                                <ul className="grid gap-1 pl-2 py-2">
                                  {item.items.map((subItem) => (
                                    <li key={subItem.title}>
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={`/dashboard/accounting${subItem.href}` || '#'}
                                          className="block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-accent focus:text-accent-foreground"
                                        >
                                          <div className="text-sm font-normal leading-none p-2">
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
                                  href={`/dashboard/accounting${item.href}` || '#'}
                                  className="block select-none space-y-1  rounded-md leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none p-2">
                                    {item.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* <div className="ml-auto flex items-center gap-4">
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
      </div> */}
    </div>
  )
}
