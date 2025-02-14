import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ActionButton {
  label: string
  icon: LucideIcon
  onClick: () => void
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

interface PageHeaderProps {
  title: string
  actions?: ActionButton[]
  className?: string
}

export function GenericPageHeader({ title, actions, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        'sticky top-0 z-10 bg-background ',
        'flex justify-between items-center',
        className
      )}
    >
      <h1 className="heading-text font-semibold tracking-tight">{title}</h1>
      {actions && actions.length > 0 && (
        <div className="flex space-x-2">
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} variant={action.variant || 'default'}>
              {action.icon && <action.icon className="mr-2 h-4 w-4" />}
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
