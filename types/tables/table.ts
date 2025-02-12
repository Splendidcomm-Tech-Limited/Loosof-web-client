import type { LucideIcon } from 'lucide-react'
import type React from 'react'

export interface BaseRow {
  id: string
  [key: string]: any
}

export interface ColumnDef<T extends BaseRow> {
  key: keyof T
  header: string
  width: number
  editable?: boolean
  type?: 'text' | 'number' | 'select' | 'date'
  options?: { value: string; label: string }[]
  render?: (value: any, row: T) => React.ReactNode
}

export interface ActionMenuItem {
  label: string
  icon: LucideIcon
  onClick: () => void
  disabled?: boolean
}
