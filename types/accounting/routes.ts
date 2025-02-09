type RouteItem = {
  title: string

  href?: string
  items?: RouteItem[]
}

type RouteCategory = {
  title: string
  items: RouteItem[]
}

export type AccountingRoutesType = {
  quickView: RouteCategory
  configuration: RouteCategory
  operations: RouteCategory
  reports: RouteCategory
  bic: RouteCategory
}
