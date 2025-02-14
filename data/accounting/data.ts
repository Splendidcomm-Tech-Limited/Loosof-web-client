import { BaseRow, ColumnDef } from '@/types'

export const sampleActivities = [
  {
    id: '1',
    userId: '1',
    userName: 'Emmanuel Ekpenyong',
    action: 'made changes to this document',
    timestamp: new Date('2024-08-12T12:33:00'),
    userInitials: 'E',
  },
  {
    id: '2',
    userId: '1',
    userName: 'Emmanuel Ekpenyong',
    action: 'made changes to this document',
    timestamp: new Date('2024-08-12T12:33:00'),
    userInitials: 'E',
  },
  {
    id: '3',
    userId: '1',
    userName: 'Emmanuel Ekpenyong',
    action: 'made changes to this document',
    timestamp: new Date('2024-08-12T12:33:00'),
    userInitials: 'E',
  },
  {
    id: '4',
    userId: '1',
    userName: 'Emmanuel Ekpenyong',
    action: 'made changes to this document',
    timestamp: new Date('2024-08-11T12:33:00'),
    userInitials: 'E',
  },
  {
    id: '5',
    userId: '1',
    userName: 'Emmanuel Ekpenyong',
    action: 'made changes to this document',
    timestamp: new Date('2024-08-11T12:33:00'),
    userInitials: 'E',
  },
  {
    id: '6',
    userId: '1',
    userName: 'Emmanuel Ekpenyong',
    action: 'made changes to this document',
    timestamp: new Date('2024-08-11T12:33:00'),
    userInitials: 'E',
  },
]

export interface TransactionRow extends BaseRow {
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

export const initialSampleData: TransactionRow[] = [
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

export const columns: ColumnDef<TransactionRow>[] = [
  {
    key: 'type',
    header: 'Type',
    width: 10,
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
  {
    key: 'description',
    header: 'Description',
    width: 200,
    editable: true,

    backgroundColor: '#EFFDFA',
  },
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
  {
    key: 'units',
    header: 'Units',
    width: 100,
    type: 'number',
    editable: true,

    backgroundColor: '#FFF7ED',
  },
  {
    key: 'price',
    header: 'Price',
    width: 200,
    type: 'number',
    editable: true,

    backgroundColor: '#FFF7ED',
  },
  {
    key: 'serialLot',
    header: 'Serial/Lot',
    width: 150,
    editable: true,

    backgroundColor: '#FFF7ED',
  },
  { key: 'vat', header: 'VAT', width: 100, editable: true },
  { key: 'discPercent', header: 'Disc %', width: 200, type: 'number', editable: true },
  {
    key: 'discount',
    header: 'Discount',
    width: 100,
    type: 'number',
    editable: true,

    backgroundColor: '#FFF7ED',
  },
  { key: 'subtotal', header: 'Subtotal', width: 200, type: 'number', editable: false },
  // { key: 'createdAt', header: 'Created At', width: 150, editable: false },
  // { key: 'createdBy', header: 'Created By', width: 150, editable: false },
]
