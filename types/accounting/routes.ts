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
  configurations: RouteCategory
  operations: RouteCategory
  reports: RouteCategory
  bic: RouteCategory
}
