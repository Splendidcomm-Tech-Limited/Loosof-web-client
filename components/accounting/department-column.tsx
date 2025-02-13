/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Checkbox } from '../ui/checkbox'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Department = {
  id: string
  department_name: string
  description: string
  created_by: string
  created_at: string
  status: 'active' | 'inactive'
}

export const columns: ColumnDef<Department>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value : any) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value:any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'department_name',
    enableHiding: false,
    header: ({ column }) => {
      return (
        <div className='flex  items-center' >
          Depart. Name
          <ArrowUpDown onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className="ml-2 h-4 w-4 cursor-pointer" />
        </div>
      )
    },
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <div className='flex items-center'>
        Description
        <ArrowUpDown 
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} 
          className="ml-2 h-4 w-4 cursor-pointer" 
        />
      </div>
    ),
    cell: ({ row }) => {
      const description = row.getValue('description') as string;
      return (
        <span>
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </span>
      );
    }
  },
  
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <div className='flex  items-center' >
          Created At
          <ArrowUpDown onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className="ml-2 h-4 w-4 cursor-pointer" />
        </div>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('created_at'))
      const formatted = date.toLocaleDateString()
      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'created_by',
    header: ({ column }) => {
      return (
        <div className='flex  items-center' >
          Created By
          <ArrowUpDown onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className="ml-2 h-4 w-4 cursor-pointer" />
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div className='flex  items-center' >
          Status
          <ArrowUpDown onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className="ml-2 h-4 w-4 cursor-pointer" />
        </div>
      )
    },
    cell: ({ row }) => {
      const data = row.getValue('status')
      return <div>{data === 'female' ? 'active' : 'inactive'}</div>
    },
  },
  {
    id: 'actions',
    enableSorting: false,
    enableHiding: false,
    header: 'Action',
    cell: ({ row }) => {
      const department = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(department.id)}>
              Copy department ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete department</DropdownMenuItem>
            <DropdownMenuItem>Edit department</DropdownMenuItem>
            <DropdownMenuItem>Duplicate department</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
