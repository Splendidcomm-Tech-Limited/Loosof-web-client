'use client'

import { InvoiceForm } from '@/components/accounting/invoice/invoice-form'
import { DataTable } from '@/components/ui/table/generic-data-table'
import { TableSummary } from '@/components/ui/table/table-summary'
import { BaseRow, ColumnDef } from '@/types'
import { Split, Paperclip, Copy, Trash2, FileText } from 'lucide-react'
import React, { useState } from 'react'
interface TransactionRow extends BaseRow {
  type: 'GL' | 'Item'
  item: string
  description: string
  account: string
  warehouse: string
  available: number
  quantity: number
  units: number
  price: number
  serialLot: string
  vat: string
  discPercent: number
  discount: number
  subtotal: number
  createdAt: string
  createdBy: string
}

const initialSampleData: TransactionRow[] = [
  {
    id: '1',
    type: 'Item',
    item: 'Product A',
    description: 'High-quality product',
    account: 'Sales',
    warehouse: 'Main',
    available: 100,
    quantity: 1,
    units: 1,
    price: 99.99,
    serialLot: 'LOT123',
    vat: '20%',
    discPercent: 0,
    discount: 0,
    subtotal: 99.99,
    createdAt: '2023-06-01',
    createdBy: 'John Doe',
  },
  {
    id: '2',
    type: 'GL',
    item: '',
    description: 'General Ledger Entry',
    account: 'Expenses',
    warehouse: '',
    available: 0,
    quantity: 0,
    units: 0,
    price: 0,
    serialLot: '',
    vat: '0%',
    discPercent: 0,
    discount: 0,
    subtotal: 0,
    createdAt: '2023-06-02',
    createdBy: 'Jane Smith',
  },
]

const columns: ColumnDef<TransactionRow>[] = [
  {
    key: 'type',
    header: 'Type',
    width: 100,
    type: 'select',
    options: [
      { value: 'GL', label: 'GL' },
      { value: 'Item', label: 'Item' },
    ],
    editable: true,
  },

  {
    key: 'item',
    header: 'item',
    width: 100,
    type: 'select',
    options: [
      { value: 'item one', label: 'item one' },
      { value: 'Item', label: 'Item' },
    ],
    editable: true,
  },
  { key: 'description', header: 'Description', width: 200, editable: true },
  { key: 'account', header: 'Account', width: 150, editable: true },
  { key: 'available', header: 'Available', width: 100, type: 'number', editable: false },

  {
    key: 'warehouse',
    header: 'Warehouse',
    width: 100,
    type: 'select',
    options: [
      { value: 'location one', label: 'Location one' },
      { value: 'location two', label: 'Location two' },
    ],
    editable: true,
  },
  { key: 'quantity', header: 'Quantity', width: 100, type: 'number', editable: true },
  { key: 'units', header: 'Units', width: 100, type: 'number', editable: true },
  { key: 'price', header: 'Price', width: 100, type: 'number', editable: true },
  { key: 'serialLot', header: 'Serial/Lot', width: 150, editable: true },
  { key: 'vat', header: 'VAT', width: 100, editable: true },
  { key: 'discPercent', header: 'Disc %', width: 100, type: 'number', editable: true },
  { key: 'discount', header: 'Discount', width: 100, type: 'number', editable: true },
  { key: 'subtotal', header: 'Subtotal', width: 100, type: 'number', editable: false },
  // { key: 'createdAt', header: 'Created At', width: 150, editable: false },
  // { key: 'createdBy', header: 'Created By', width: 150, editable: false },
]

export default function Page() {
  const [rows, setRows] = useState<TransactionRow[]>(initialSampleData)
  const [note, setNote] = useState('')

  const handleRowAdd = (newRow: TransactionRow) => {
    setRows([...rows, newRow])
    console.log('Adding new row', newRow)
  }

  const handleRowDelete = (id: string) => {
    setRows(rows.filter((row) => row.id !== id))
    console.log('Deleting row', id)
  }

  const handleRowDuplicate = (id: string) => {
    const rowToDuplicate = rows.find((row) => row.id === id)
    if (rowToDuplicate) {
      const newRow = { ...rowToDuplicate, id: crypto.randomUUID() }
      setRows([...rows, newRow])
      console.log('Duplicating row', id)
    }
  }

  const handleRowUpdate = (id: string, field: keyof TransactionRow, value: any) => {
    setRows(
      rows.map((row) => {
        if (row.id === id) {
          const updatedRow = { ...row, [field]: value }
          if (
            field === 'quantity' ||
            field === 'price' ||
            field === 'discPercent' ||
            field === 'discount'
          ) {
            updatedRow.subtotal = calculateSubtotal(updatedRow)
          }
          return updatedRow
        }
        return row
      })
    )
    console.log('Updating row', id, field, value)
  }

  const calculateSubtotal = (row: TransactionRow): number => {
    const baseAmount = row.quantity * row.price
    const discountAmount = (baseAmount * row.discPercent) / 100
    return baseAmount - discountAmount - row.discount
  }

  const getActionItems = (row: TransactionRow) => [
    {
      label: 'Split Line',
      icon: Split,
      onClick: () => console.log('Split', row.id),
    },
    {
      label: 'Add Attachment',
      icon: Paperclip,
      onClick: () => console.log('Attachment', row.id),
    },
    {
      label: 'Duplicate',
      icon: Copy,
      onClick: () => handleRowDuplicate(row.id),
    },
    {
      label: 'Delete',
      icon: Trash2,
      onClick: () => handleRowDelete(row.id),
    },
    {
      label: 'Add Note',
      icon: FileText,
      onClick: () => console.log('Note', row.id),
    },
  ]

  const calculateTotals = () => {
    return rows.reduce(
      (acc, row) => {
        const rowTotal = row.quantity * row.price
        const rowDiscount = (rowTotal * row.discPercent) / 100 + row.discount
        const rowExclusive = rowTotal - rowDiscount
        // Assuming VAT is a percentage string like "20%"
        const vatRate = Number.parseFloat(row.vat) / 100
        const rowVAT = rowExclusive * vatRate

        return {
          totalDiscount: acc.totalDiscount + rowDiscount,
          totalExclusive: acc.totalExclusive + rowExclusive,
          totalVAT: acc.totalVAT + rowVAT,
          total: acc.total + rowExclusive + rowVAT,
        }
      },
      {
        totalDiscount: 0,
        totalExclusive: 0,
        totalVAT: 0,
        total: 0,
      }
    )
  }

  const totals = calculateTotals()
  return (
    <div>
      <InvoiceForm />

      <DataTable<TransactionRow>
        title="Transactions"
        columns={columns}
        data={rows}
        onRowAdd={handleRowAdd}
        onRowDelete={handleRowDelete}
        onRowDuplicate={handleRowDuplicate}
        onRowUpdate={handleRowUpdate}
        getActionItems={getActionItems}
      />

      <TableSummary
        totalDiscount={totals.totalDiscount}
        totalExclusive={totals.totalExclusive}
        totalVAT={totals.totalVAT}
        total={totals.total}
        amountDue={totals.total}
        note={note}
        onNoteChange={setNote}
      />
    </div>
  )
}
