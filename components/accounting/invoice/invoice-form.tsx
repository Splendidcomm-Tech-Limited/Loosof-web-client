'use client'
import { Save, Play, Edit, Trash } from 'lucide-react'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { GenericForm, type FormField } from '@/components/ui/forms/generic-form'

const invoiceFormFields: FormField[] = [
  { name: 'invoiceNumber', label: 'Invoice Number', type: 'text', placeholder: 'INV-0001' },
  { name: 'invoiceDate', label: 'Invoice Date', type: 'date' },
  { name: 'currency', label: 'Currency', type: 'select', options: ['USD', 'EUR', 'GBP'] },
  { name: 'jobCard', label: 'Job Card', type: 'select', options: ['JC-001', 'JC-002', 'JC-003'] },
  {
    name: 'salesOrder',
    label: 'Sales Order',
    type: 'select',
    options: ['SO-001', 'SO-002', 'SO-003'],
  },
  {
    name: 'customer',
    label: 'Customer',
    type: 'select',
    options: ['Customer 1', 'Customer 2', 'Customer 3'],
  },
  { name: 'paymentReference', label: 'Payment Reference', type: 'text', placeholder: 'REF-0001' },
  { name: 'fxRate', label: 'FX Rate', type: 'number', placeholder: '1.0' },
  { name: 'documentDescription', label: 'Document Description', type: 'text' },
  { name: 'documentDiscount', label: 'Document Discount', type: 'number', placeholder: '0.00' },
  { name: 'salesRep', label: 'Sales Rep', type: 'select', options: ['Rep 1', 'Rep 2', 'Rep 3'] },
  {
    name: 'paymentTerms',
    label: 'Payment Terms',
    type: 'select',
    options: ['Net 30', 'Net 60', 'Net 90'],
  },
  {
    name: 'invoiceTemplate',
    label: 'Invoice Template',
    type: 'select',
    options: ['Template 1', 'Template 2', 'Template 3'],
  },
  {
    name: 'project',
    label: 'Project',
    type: 'select',
    options: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'useInclusiveAmount',
    label: 'Use Inclusive Amount',
    type: 'switch',
  },
]

const formSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required'),
  invoiceDate: z.date(),
  currency: z.string().min(1, 'Currency is required'),
  jobCard: z.string(),
  salesOrder: z.string(),
  customer: z.string().min(1, 'Customer is required'),
  paymentReference: z.string(),
  fxRate: z.string(),
  documentDescription: z.string(),
  documentDiscount: z.string(),
  salesRep: z.string(),
  paymentTerms: z.string(),
  invoiceTemplate: z.string(),
  project: z.string(),
  useInclusiveAmount: z.boolean().default(false),
  notes: z.string(),
})

export function InvoiceForm() {
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const parsedData = formSchema.parse(data)
    console.log(parsedData)
    // Handle form submission
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="heading-text">Create New Invoice</h1>
        <div className="flex space-x-2">
          <Button type="submit" variant="default">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button type="button" variant="default">
            <Play className="mr-2 h-4 w-4" />
            Process
          </Button>
          <Button type="button" variant="default">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button type="button" variant="default">
            <Trash className="mr-2 h-4 w-4" />
            Discard
          </Button>
        </div>
      </div>

      <GenericForm fields={invoiceFormFields} onSubmit={handleSubmit} submitText="Save Invoice" />
    </div>
  )
}
