import { Departments } from "@/data/accounting/departments"
import {ColumnDef} from "@tanstack/react-table"

export const departmentColumn: ColumnDef<Departments>[] = [
    {
        header: "Code",  // Column header
        accessorKey: "code",

    },
    {
        header : "Departmen Name",
        accessorKey : "name"
    },
    {
        header : "Description",
        accessorKey: "description",

    },
    {
        header : "Active",
        accessorKey : "status"
    },
    {
        header : "Created At",
        accessorKey : "created_at"
    },
    {
        header : "Created By",
        accessorKey: "created_by"
    },
  

]

