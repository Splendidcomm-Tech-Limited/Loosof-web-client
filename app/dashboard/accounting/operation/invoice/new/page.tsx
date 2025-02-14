'use client'

import { InvoiceForm } from '@/components/accounting/invoice/invoice-form'
import { ActivityLog } from '@/components/ui/activity-log/activity-log'
import { DataTable } from '@/components/ui/table/generic-data-table'
import { TableSummary } from '@/components/ui/table/table-summary'
import { columns, initialSampleData, sampleActivities, TransactionRow } from '@/data/accounting/data'
import { Split, Paperclip, Copy, Trash2, FileText } from 'lucide-react'
import React, { useState } from 'react'


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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className='h-full'>
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

      <ActivityLog activities={sampleActivities} />
    </div>
  )
}
