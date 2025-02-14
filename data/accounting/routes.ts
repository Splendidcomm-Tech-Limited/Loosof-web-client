import { AccountingRoutesType } from '@/types'

export const ACCOUNTING_ROUTES: AccountingRoutesType = {

  quickView: {

    title: 'Quick View',
    items: [
      { title: 'Bank Manager', href: '/dashboard/accounting/quick-view/bank-manager' },
      { title: 'Account Receivables', href: '/dashboard/accounting/quick-view/account-receivables' },
      { title: 'Account Payables', href: '/dashboard/accounting/quick-view/account-payables' },
      { title: 'Fixed Assets', href: '/dashboard/accounting/quick-view/fixed-assets' },
      { title: 'Budget', href: '/dashboard/accounting/quick-view/budget' },
      { title: 'Account', href: '/dashboard/accounting/quick-view/account' },
    ],
  },
  configurations: {
    title: 'Configuration',

    items: [
      {
        title: 'Charts of Accounts',
        href: '/dashboard/accounting/configurations/charts-of-accounts',
      },
      {
        title: 'Foreign Currency',
        href: '/dashboard/accounting/configurations/foreign-currency',
      },
      {
        title: 'Bank Manager',
        href: '/dashboard/accounting/configurations/bank-manager',
      },
      {
        title: 'Financial Year',
        href: '/dashboard/accounting/configurations/financial-year',
      },
      {
        title: 'Taxes',
        href: '/dashboard/accounting/configurations/taxes',
      },
      {
        title: 'Account type',
        href: '/dashboard/accounting/configurations/account-type',
      },
      {
        title: 'Transaction type',
        href: '/dashboard/accounting/configurations/transaction-type',
      },
      {
        title: 'Branches',
        href: '/configurations/branches',
      },
      {
        title: 'Departments',
        href: '/dashboard/accounting/configurations/departments',
      },
      {
        title: 'Cost Center',
        href: '/dashboard/accounting/configurations/cost-center',
      },
      {
        title: 'Business Units',
        href: '/dashboard/accounting/configurations/business-units',
      },
      {
        title: 'Custom Business Segment',
        href: '/dashboard/accounting/configurations/custom-business-segment',
      },
      {
        title: 'Budget Planning',
        href: '/dashboard/accounting/configurations/budget-planning',
      },
      {
        title: 'Depreciation Method',
        href: '/dashboard/accounting/configurations/depreciation-method',
      },
      {
        title: 'Assets Types',
        href: '/dashboard/accounting/configurations/assets-types',
      },
      {
        title: 'Assets',
        href: '/dashboard/accounting/configurations/assets',
      },
    ],
  },
  operations: {
    title: 'Operation',


    items: [
      {
        title: 'Bank Management',
        items: [
          {
            title: 'Cash Book',
            href: '/dashboard/accounting/operation/cash-book',
          },
          {
            title: 'Bank Reconciliation',
            href: '/dashboard/accounting/operation/reconciliation',
          },
          {
            title: 'Bank Statement Import',
            href: '/dashboard/accounting/operation/statement-import',
          },
        ],
      },
      {
        title: 'Account Receivable',
        items: [
          {
            title: 'Invoice',
            href: '/dashboard/accounting/operation/invoice',
          },
          {
            title: 'Customers Receipt',
            href: '/dashboard/accounting/dashboard/accounting/operation/receipt',
          },
          {
            title: 'Credit Note',
            href: '/dashboard/accounting/operation/credit-note',
          },
          {
            title: 'Customers',
            href: '/dashboard/accounting/operation/customers',
          },
          {
            title: 'Allocations',
            href: '/dashboard/accounting/operation/allocations',
          },
          {
            title: 'AR Batch',
            href: '/dashboard/accounting/operation/batch',
          },
        ],
      },
      {
        title: 'Account Payable',
        items: [
          {
            title: 'Bill',
            href: '/dashboard/accounting/operation/bill',
          },
          {
            title: 'Vendor Payment',
            href: '/dashboard/accounting/operation/payment',
          },
          {
            title: 'Return Supplier',
            href: '/dashboard/accounting/operation/return',
          },
          {
            title: 'Vendors',
            href: '/dashboard/accounting/operation/vendors',
          },
          {
            title: 'Allocation',
            href: '/dashboard/accounting/operation/allocation',
          },
          {
            title: 'AP Batch',
            href: '/dashboard/accounting/operation/batch',
          },
        ],
      },
      {
        title: 'Fixed Asset',
        items: [
          {
            title: 'Generate Depreciation Batch',
            href: '/dashboard/accounting/operation/depreciation-batch',
          },
          {
            title: 'Asset Revaluation',
            href: '/dashboard/accounting/operation/revaluation',
          },
          {
            title: 'Asset Impairment',
            href: '/dashboard/accounting/operation/impairment',
          },
          {
            title: 'Asset Transfer',
            href: '/dashboard/accounting/operation/transfer',
          },
          {
            title: 'Asset Disposal',
            href: '/dashboard/accounting/operation/disposal',
          },
          {
            title: 'Asset Incidence',
            href: '/dashboard/accounting/operation/incidence',
          },
        ],
      },
      {
        title: 'Account',
        items: [
          {
            title: 'General Journal',
            href: '/dashboard/accounting/operation/journal',
          },
          {
            title: 'Journal Import',
            href: '/dashboard/accounting/operation/journal-import',
          },
        ],
      },
    ],
  },
  reports: {
    title: 'Reports',
    items: [
      {
        title: 'Financial Report',
        items: [
          { title: 'Balance Sheet', href: '/dashboard/accounting/reports/balance-sheet' },
          { title: 'Cash Flow Statement', href: '/dashboard/accounting/reports/cash-flow' },
          { title: 'Profit & Loss Report', href: '/dashboard/accounting/reports/profit-loss' },
          { title: 'Executive Summary', href: '/dashboard/accounting/reports/executive-summary' },
          { title: 'Trial Balance', href: '/dashboard/accounting/reports/trial-balance' },
          { title: 'Tax Report', href: '/dashboard/accounting/reports/tax-report' },
        ],
      },
      {
        title: 'Accounts Report',
        items: [
          { title: 'General Ledger', href: '/dashboard/accounting/reports/general-ledger' },
          { title: 'Cash Book', href: '/dashboard/accounting/reports/cash-book' },
          { title: 'Chart of Accounts', href: '/dashboard/accounting/reports/chart-of-accounts' },
          { title: 'Account Balances', href: '/dashboard/accounting/reports/account-balances' },
          { title: 'Trial Balance', href: '/dashboard/accounting/reports/trial-balance' },
          { title: 'Journal Report', href: '/dashboard/accounting/reports/journal-report' },
          { title: 'Bank Reconciliation Report', href: '/dashboard/accounting/reports/bank-reconciliation' },
        ],
      },
      {
        title: 'Partner Reports',
        items: [
          { title: 'Partner Ledger', href: '/dashboard/accounting/reports/partner-ledger' },
          { title: 'Aged Receivable', href: '/dashboard/accounting/reports/aged-receivable' },
          { title: 'Aged Payable', href: '/dashboard/accounting/reports/aged-payable' },
        ],
      },
      {
        title: 'Management Report',
        items: [
          { title: 'Dashboard', href: '/dashboard/accounting/reports/dashboard' },
          { title: 'Budget Analysis', href: '/dashboard/accounting/reports/budget-analysis' },
          { title: 'Revised Budget History', href: '/dashboard/accounting/reports/revised-budget-history' },
          { title: 'Business Performance', href: '/dashboard/accounting/reports/business-performance' },
        ],
      },
      {
        title: 'Fixed Assets',
        items: [
          { title: 'Assets Listing', href: '/reports/listing' },
          {
            title: 'Assets Transaction History',
            href: '/dashboard/accounting/reports/transaction-history',
          },
          { title: 'Assets Movement Report', href: '/dashboard/accounting/reports/movement-report' },
          { title: 'Assets Revaluation Report', href: '/dashboard/accounting/reports/revaluation-report' },
          { title: 'Assets Impairment', href: '/dashboard/accounting/reports/impairment' },
          { title: 'Assets Deposer Report', href: '/dashboard/accounting/reports/deposer-report' },
          { title: 'CAPEX Budget Report', href: '/dashboard/accounting/reports/capex-budget' },
          {
            title: 'Assets Depreciation Report',
            href: '/dashboard/accounting/reports/depreciation-report',
          },
        ],
      },
      {
        title: 'Audits Reports',
        items: [
          {
            title: 'Audit Trail (Transaction Activity)',
            href: '/dashboard/accounting/reports/transaction-activity',
          },
          { title: 'System Audit Trail (System Activity)', href: '/dashboard/accounting/reports/system-activity' },
        ],
      },
    ],
  },
  bic: {
    title: 'BIC',
    items: [
      { title: 'Cash Flow Dashboard', href: '/dashboard/accounting/bic/cash-flow' },
      { title: 'Business Perf. Dashboard', href: '/dashboard/accounting/bic/business-performance' },
      { title: 'Receivable Dashboard', href: '/dashboard/accounting/bic/receivable' },
      { title: 'Payable Dashboard', href: '/dashboard/accounting/bic/payable' },
    ],
  },
}
