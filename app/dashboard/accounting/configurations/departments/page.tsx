'use client'
import { DataTable } from '@/components/accounting/department-data-table'
import { departmentColumn } from '@/components/accounting/department-column'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { departmentsData } from '@/data/accounting/departments'

export default function DepartmentPage() {
  return (
    <div className="w-full ml-4  h-screen">
      {/* Landing Page Header */}

      <div className="pt-16 z-20 bg-white  fixed top-0  w-full">
        <h1 className="text-2xl mb-3 font-medium text-gray-700">Departments</h1>
        <Button className='mb-6' asChild>
          <Link href={'#'}>
            <Plus /> New
          </Link>
        </Button>
      </div>

      {/* Data Table */}
      <div className="pt-32 pb-12 h-5/6 overflow-y-auto">
        <DataTable columns={departmentColumn} data={departmentsData} />
      </div>
    </div>
  )
}
;<Plus />
