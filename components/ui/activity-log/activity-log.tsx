"use client"

import { format, formatDistanceToNow } from "date-fns"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface Activity {
  id: string
  userId: string
  userName: string
  action: string
  timestamp: Date
  userInitials: string
  details?: string
}

interface ActivityLogProps {
  activities: Activity[]
  className?: string
  maxHeight?: string
}

function groupActivitiesByDate(activities: Activity[]) {
  const grouped = activities.reduce(
    (acc, activity) => {
      const date = format(activity.timestamp, "dd MMMM yyyy")
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(activity)
      return acc
    },
    {} as Record<string, Activity[]>,
  )

  return Object.entries(grouped)
}

export function ActivityLog({ activities, className, maxHeight = "400px" }: ActivityLogProps) {
  const groupedActivities = groupActivitiesByDate(activities)

  return (
    <div className={cn("w-full my-10 mx-auto", className)}>
      <h2 className="heading-text mb-4 px-2 sm:px-0">Activity Log</h2>
      <ScrollArea className={cn("pr-4", maxHeight && `h-[${maxHeight}]`)}>
        <div className="space-y-8">
          {groupedActivities.map(([date, dateActivities]) => (
            <div key={date} className="space-y-4">
              <h3 className="text-lg text-muted-foreground sticky top-0 bg-background px-2 py-1 sm:px-0">{date}</h3>
              <div className="space-y-4">
                {dateActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 px-2 sm:px-0">
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        {activity.userInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-medium truncate">{activity.userName}</span>
                          <span className="text-muted-foreground truncate">{activity.action}</span>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <time
                                className="text-sm text-muted-foreground whitespace-nowrap"
                                dateTime={activity.timestamp.toISOString()}
                              >
                                {format(activity.timestamp, "h:mma").toLowerCase()}
                              </time>
                            </TooltipTrigger>
                            <TooltipContent side="left">
                              <div className="space-y-1">
                                <p>{format(activity.timestamp, "PPPp")}</p>
                                <p className="text-xs text-muted-foreground">
                                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                                </p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {activity.details && <p className="mt-1 text-sm text-muted-foreground">{activity.details}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

