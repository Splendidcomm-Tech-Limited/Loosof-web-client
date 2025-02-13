/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import { Plus, GripVertical } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ActionMenu } from './action-menu'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ActionMenuItem, BaseRow, ColumnDef } from '@/types'

interface DataTableProps<T extends BaseRow> {
  title: string
  columns: ColumnDef<T>[]
  data: T[]
  onRowAdd?: (newRow: T) => void
  onRowDelete?: (id: string) => void
  onRowDuplicate?: (id: string) => void
  onRowUpdate?: (id: string, field: keyof T, value: any) => void
  getActionItems?: (row: T) => ActionMenuItem[]
  rowHeight?: number
}

const DraggableTableRow = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <TableRow ref={setNodeRef} style={style} {...attributes}>
      <TableCell>
        <GripVertical className="h-4 w-4 cursor-move" {...listeners} />
      </TableCell>
      {children}
    </TableRow>
  )
}

export function DataTable<T extends BaseRow>({
  title,
  columns,
  data,
  onRowAdd,
  onRowDelete,
  onRowDuplicate,
  onRowUpdate,
  getActionItems,
  rowHeight = 40,
}: DataTableProps<T>) {
  const [rows, setRows] = React.useState<T[]>(data)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setRows((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const handleRowUpdate = (id: string, field: keyof T, value: any) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value }
      }
      return row
    })
    setRows(updatedRows)
    onRowUpdate?.(id, field, value)
  }

  const handleAddNewRow = () => {
    if (onRowAdd) {
      const newRow = {
        id: crypto.randomUUID(),
        ...Object.fromEntries(columns.map((col) => [col.key, ''])),
      } as T
      setRows([...rows, newRow])
      onRowAdd(newRow)
    }
  }

  const handleDeleteRow = (id: string) => {
    setRows(rows.filter((row) => row.id !== id))
    onRowDelete?.(id)
  }

  const handleDuplicateRow = (id: string) => {
    const rowToDuplicate = rows.find((row) => row.id === id)
    if (rowToDuplicate) {
      const newRow = { ...rowToDuplicate, id: crypto.randomUUID() }
      setRows([...rows, newRow])
      onRowDuplicate?.(id)
    }
  }

  const renderCell = (row: T, column: ColumnDef<T>) => {
    const value = row[column.key]

    if (column.render) {
      return column.render(value, row)
    }

    switch (column.type) {
      case 'select':
        return (
          <Select
            value={value as string}
            onValueChange={(newValue) => handleRowUpdate(row.id, column.key, newValue)}
            disabled={!column.editable}
          >
            <SelectTrigger className="w-full">
              <SelectValue>{value}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {column.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'number':
        return (
          <Input
            type="number"
            value={value as number}
            onChange={(e) => handleRowUpdate(row.id, column.key, Number.parseFloat(e.target.value))}
            className="w-full"
            disabled={!column.editable}
          />
        )
      default:
        return (
          <Input
            type="text"
            value={value as string}
            onChange={(e) => handleRowUpdate(row.id, column.key, e.target.value)}
            className="w-full"
            disabled={!column.editable}
          />
        )
    }
  }

  return (
    <div className="space-y-4 my-10 w-full ">
      <div className="flex justify-between items-center">
        <h2 className="heading-text ">{title}</h2>
      </div>

        <div className="">
      <ScrollArea className="w-full rounded-md border">

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <Table className='w-full'>
              <TableHeader>
                <TableRow className="bg-[#FFEDD5]">
                  <TableHead className="w-[30px]"></TableHead>
                  {columns.map((column) => (
                    <TableHead
                      key={column.key as string}
                      className="font-semibold text-heading capitalize"
                      style={{ width: column.width }}
                    >
                      {column.header}
                    </TableHead>
                  ))}
                  {getActionItems && <TableHead className="w-[50px] text-heading font-semibold">Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <SortableContext
                items={rows.map((row) => row.id)}
                strategy={verticalListSortingStrategy}
              >
                <TableBody>
                  {rows.map((row) => (
                    <DraggableTableRow key={row.id} id={row.id}>
                      {columns.map((column) => (
                        <TableCell
                          key={`${row.id}-${column.key as string}`}
                          style={{ height: `${rowHeight}px` }}
                        >
                          {renderCell(row, column)}
                        </TableCell>
                      ))}
                      {getActionItems && (
                        <TableCell>
                          <ActionMenu items={getActionItems(row)} />
                        </TableCell>
                      )}
                    </DraggableTableRow>
                  ))}
                </TableBody>
              </SortableContext>
            </Table>
          </DndContext>
      </ScrollArea>

        </div>

      {onRowAdd && (
        <Button
          onClick={handleAddNewRow}
          className="bg-transparent hover:bg-transparent text-heading"
        >
          <Plus className="w-4 h-4 mr-2" /> Add New Row
        </Button>
      )}
    </div>
  )
}
