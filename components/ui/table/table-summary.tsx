import { Textarea } from "@/components/ui/textarea"

interface TableSummaryProps {
  totalDiscount: number
  totalExclusive: number
  totalVAT: number
  total: number
  amountDue: number
  onNoteChange?: (note: string) => void
  note?: string
}

export function TableSummary({
  totalDiscount,
  totalExclusive,
  totalVAT,
  total,
  amountDue,
  onNoteChange,
  note = "",
}: TableSummaryProps) {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-heading">Add a Note</h3>
        <Textarea
          placeholder="Add a Note"
          className="min-h-[150px]"
          value={note}
          onChange={(e) => onNoteChange?.(e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-heading">Total Discount</span>
            <span className="font-medium">{formatAmount(totalDiscount)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-heading">Total Exclusive</span>
            <span className="font-medium">{formatAmount(totalExclusive)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-heading">Total VAT</span>
            <span className="font-medium">{formatAmount(totalVAT)}</span>
          </div>
          <div className="flex justify-between items-center border-t pt-2 mt-2">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">{formatAmount(total)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-heading">Amount Due</span>
            <span className="font-medium">{formatAmount(amountDue)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

