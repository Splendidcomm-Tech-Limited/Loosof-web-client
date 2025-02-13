import {
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  // BookOpen,
  Wallet,
  // Calculator,
  // Building2,
  // ClipboardList,
  Factory,
  // ShoppingCart,
  Component,
  Tags,
  // UsersRound,
  TableProperties,
  // Wrench,
  Package2,
} from 'lucide-react'
import { ACCOUNTING_ROUTES } from './accounting/routes'
import { CRM_ROUTES } from './crm/routes'
import { POS_ROUTES } from './pos/routes'
import { SALES_ROUTES } from './sales/routes'
import { MANUFACTURING_ROUTES } from './manufacturing/routes'
import { PROJECTS_ROUTES } from './projects/routes'

export const sidebarData = {
  user: {
    name: 'John Doe',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Accounting',
      url: '#',
      icon: Wallet,
      isActive: true,
      items: ACCOUNTING_ROUTES,
    },

    {
      title: 'CRM',
      url: '#',
      icon: Component,
      isActive: false,
      items: CRM_ROUTES,
    },
    ,
    // {
    //   title: 'Inventory',
    //   url: '#',
    //   icon: Building2,
    //   isActive: false,
    //   items: [
    //     {
    //       title: 'History',
    //       url: '#',
    //     },
    //     {
    //       title: 'Starred',
    //       url: '#',
    //     },
    //     {
    //       title: 'Settings',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'Requisition',
    //   url: '#',
    //   icon: ClipboardList,
    //   isActive: false,
    //   items: [
    //     {
    //       title: 'History',
    //       url: '#',
    //     },
    //     {
    //       title: 'Starred',
    //       url: '#',
    //     },
    //     {
    //       title: 'Settings',
    //       url: '#',
    //     },
    //   ],
    // },
    {
      title: 'Manufacturing',
      url: '#',
      icon: Factory,
      isActive: false,
      items: MANUFACTURING_ROUTES,
    },
    // {
    //   title: 'Purchase',
    //   url: '#',
    //   icon: ShoppingCart,
    //   isActive: false,
    //   items: [
    //     {
    //       title: 'History',
    //       url: '#',
    //     },
    //     {
    //       title: 'Starred',
    //       url: '#',
    //     },
    //     {
    //       title: 'Settings',
    //       url: '#',
    //     },
    //   ],
    // },
    {
      title: 'Point of Sales',
      url: '#',
      icon: Package2,
      isActive: false,
      items: POS_ROUTES,
    },
    {
      title: 'Sales',
      url: '#',
      icon: Tags,
      isActive: false,
      items: SALES_ROUTES,
    },
    // {
    //   title: 'HRMS',
    //   url: '#',
    //   icon: UsersRound,
    //   isActive: false,
    //   items: [
    //     {
    //       title: 'History',
    //       url: '#',
    //     },
    //     {
    //       title: 'Starred',
    //       url: '#',
    //     },
    //     {
    //       title: 'Settings',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'Survey',
    //   url: '#',
    //   icon: ClipboardList,
    //   isActive: false,
    //   items: [
    //     {
    //       title: 'History',
    //       url: '#',
    //     },
    //     {
    //       title: 'Starred',
    //       url: '#',
    //     },
    //     {
    //       title: 'Settings',
    //       url: '#',
    //     },
    //   ],
    // },
    {
      title: 'Projects',
      url: '#',
      icon: TableProperties,
      isActive: false,
      items: PROJECTS_ROUTES,
    },
    // {
    //   title: 'Maintenance',
    //   url: '#',
    //   icon: Wrench,
    //   isActive: false,
    //   items: [
    //     {
    //       title: 'History',
    //       url: '#',
    //     },
    //     {
    //       title: 'Starred',
    //       url: '#',
    //     },
    //     {
    //       title: 'Settings',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'Documentation',
    //   url: '#',
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: 'Introduction',
    //       url: '#',
    //     },
    //     {
    //       title: 'Get Started',
    //       url: '#',
    //     },
    //     {
    //       title: 'Tutorials',
    //       url: '#',
    //     },
    //     {
    //       title: 'Changelog',
    //       url: '#',
    //     },
    //   ],
    // },
  ],
}
