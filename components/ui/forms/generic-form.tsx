/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

import { Calendar } from '@/components/ui/calendar'

export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'switch'
  options?: string[]
  placeholder?: string
  description?: string
}

interface GenericFormProps {
  fields: FormField[]
  onSubmit: (data: any) => void
  title?: string
  submitText: string
}

export function GenericForm({ fields, onSubmit, title, submitText }: GenericFormProps) {
  const formSchema = z.object(
    fields.reduce(
      (acc, field) => {
        if (field.type === 'switch') {
          acc[field.name] = z.boolean().default(false)
        } else {
          acc[field.name] = z.string().min(1, `${field.label} is required`)
        }
        return acc
      },
      {} as { [key: string]: z.ZodType<any> }
    )
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: fields.reduce(
      (acc, field) => {
        acc[field.name] = field.type === 'switch' ? false : ''
        return acc
      },
      {} as { [key: string]: any }
    ),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="heading-text">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    {field.type === 'select' ? (
                      <Select onValueChange={formField.onChange} defaultValue={formField.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={field.placeholder || `Select ${field.label}`}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : field.type === 'textarea' ? (
                      <Textarea placeholder={field.placeholder} {...formField} />
                    ) : field.type === 'switch' ? (
                      <div className="">
                        <Switch checked={formField.value} onCheckedChange={formField.onChange} />
                      </div>
                    ) : field.type === 'date' ? (
                      <div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-full pl-3 text-left font-normal',
                                  !formField.value &&
                                    'text-transparent focus-visible:ring-1 focus-visible:ring-ring'
                                )}
                              >
                                {formField.value ? (
                                  format(new Date(formField.value), 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white" align="start">
                            <Calendar
                              mode="single"
                              selected={formField.value ? new Date(formField.value) : undefined} // ✅ Ensure correct format
                              onSelect={(date) => formField.onChange(date?.toISOString())} // ✅ Store as ISO string
                              disabled={(date) =>
                                date > new Date() || date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    ) : (
                      <Input type={field.type} placeholder={field.placeholder} {...formField} />
                    )}
                  </FormControl>
                  {field.description && <FormDescription>{field.description}</FormDescription>}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        {/* <Button type="submit">{submitText}</Button> */}
      </form>
    </Form>
  )
}
