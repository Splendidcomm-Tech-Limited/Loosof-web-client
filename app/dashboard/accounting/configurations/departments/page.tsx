import { DataTable } from '@/components/accounting/department-data-table'
// import { departmentColumn } from '@/components/accounting/department-column'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
// import { departmentsData } from '@/data/accounting/departments'
import { columns, Department } from '@/components/accounting/department-column'

async function getDepartment(): Promise<Department[]> {
  const res = await fetch('https://67ad93293f5a4e1477de1ff0.mockapi.io/api/v1/departments')
  const data = await res.json()

  return data
}

export default async function DepartmentPage() {
  const data = await getDepartment()
  return (
    <div className="w-full  h-screen">
      {/* Landing Page Header */}

      <div className=" z-20 bg-white   top-0  w-full">
        <h1 className="heading-text mb-2">Departments</h1>
        <Button className="mb-6" asChild>
          <Link href={'#'}>
            <Plus /> New
          </Link>
        </Button>
      </div>

      {/* Data Table */}
      <div className="pt-32 ">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
