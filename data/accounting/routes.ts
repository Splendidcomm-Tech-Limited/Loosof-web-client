'use client'

import { AccountingRoutesType } from "@/types";

export const Accountingroutes : AccountingRoutesType = {
  quickView: {
    title: 'Quick View',
    items: [
      { title: 'Bank Manager', href: '/quick-view/bank-manager' },
      { title: 'Account Receivables', href: '/quick-view/account-receivables' },
      { title: 'Account Payables', href: '/quick-view/account-payables' },
      { title: 'Fixed Assets', href: '/quick-view/fixed-assets' },
      { title: 'Budget', href: '/quick-view/budget' },
      { title: 'Account', href: '/quick-view/account' },
    ],
  },
  configuration: {
    title: 'Configuration',
    items: [
      {
        title: 'Charts of Accounts',
        href: '/configuration/charts-of-accounts',
      },
      {
        title: 'Foreign Currency',
        href: '/configuration/foreign-currency',
      },
      {
        title: 'Bank Manager',
        href: '/configuration/bank-manager',
      },
      {
        title: 'Financial Year',
        href: '/configuration/financial-year',
      },
      {
        title: 'Taxes',
        href: '/configuration/taxes',
      },
      {
        title: 'Account type',
        href: '/configuration/account-type',
      },
      {
        title: 'Transaction type',
        href: '/configuration/transaction-type',
      },
      {
        title: 'Branches',
        href: '/configuration/branches',
      },
      {
        title: 'Departments',
        href: '/configuration/departments',
      },
      {
        title: 'Cost Center',
        href: '/configuration/cost-center',
      },
      {
        title: 'Business Units',
        href: '/configuration/business-units',
      },
      {
        title: 'Custom Business Segment',
        href: '/configuration/custom-business-segment',
      },
      {
        title: 'Budget Planning',
        href: '/configuration/budget-planning',
      },
      {
        title: 'Depreciation Method',
        href: '/configuration/depreciation-method',
      },
      {
        title: 'Assets Types',
        href: '/configuration/assets-types',
      },
      {
        title: 'Assets',
        href: '/configuration/assets',
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
            href: '/operation/bank-management/cash-book',
          },
          {
            title: 'Bank Reconciliation',
            href: '/operation/bank-management/reconciliation',
          },
          {
            title: 'Bank Statement Import',
            href: '/operation/bank-management/statement-import',
          },
        ],
      },
      {
        title: 'Account Receivable',
        items: [
          {
            title: 'Invoice',
            href: '/operation/account-receivable/invoice',
          },
          {
            title: 'Customers Receipt',
            href: '/operation/account-receivable/receipt',
          },
          {
            title: 'Credit Note',
            href: '/operation/account-receivable/credit-note',
          },
          {
            title: 'Customers',
            href: '/operation/account-receivable/customers',
          },
          {
            title: 'Allocations',
            href: '/operation/account-receivable/allocations',
          },
          {
            title: 'AR Batch',
            href: '/operation/account-receivable/batch',
          },
        ],
      },
      {
        title: 'Account Payable',
        items: [
          {
            title: 'Bill',
            href: '/operation/account-payable/bill',
          },
          {
            title: 'Vendor Payment',
            href: '/operation/account-payable/payment',
          },
          {
            title: 'Return Supplier',
            href: '/operation/account-payable/return',
          },
          {
            title: 'Vendors',
            href: '/operation/account-payable/vendors',
          },
          {
            title: 'Allocation',
            href: '/operation/account-payable/allocation',
          },
          {
            title: 'AP Batch',
            href: '/operation/account-payable/batch',
          },
        ],
      },
      {
        title: 'Fixed Asset',
        items: [
          {
            title: 'Generate Depreciation Batch',
            href: '/operation/fixed-asset/depreciation-batch',
          },
          {
            title: 'Asset Revaluation',
            href: '/operation/fixed-asset/revaluation',
          },
          {
            title: 'Asset Impairment',
            href: '/operation/fixed-asset/impairment',
          },
          {
            title: 'Asset Transfer',
            href: '/operation/fixed-asset/transfer',
          },
          {
            title: 'Asset Disposal',
            href: '/operation/fixed-asset/disposal',
          },
          {
            title: 'Asset Incidence',
            href: '/operation/fixed-asset/incidence',
          },
        ],
      },
      {
        title: 'Account',
        items: [
          {
            title: 'General Journal',
            href: '/operation/account/journal',
          },
          {
            title: 'Journal Import',
            href: '/operation/account/journal-import',
          },
        ],
      },
    ],
  },
  reports: {
    title: "Reports",
    items: [
      {
        title: "Financial Report",
        items: [
          { title: "Balance Sheet", href: "/reports/financial/balance-sheet" },
          { title: "Cash Flow Statement", href: "/reports/financial/cash-flow" },
          { title: "Profit & Loss Report", href: "/reports/financial/profit-loss" },
          { title: "Executive Summary", href: "/reports/financial/executive-summary" },
          { title: "Trial Balance", href: "/reports/financial/trial-balance" },
          { title: "Tax Report", href: "/reports/financial/tax-report" },
        ],
      },
      {
        title: "Accounts Report",
        items: [
          { title: "General Ledger", href: "/reports/accounts/general-ledger" },
          { title: "Cash Book", href: "/reports/accounts/cash-book" },
          { title: "Chart of Accounts", href: "/reports/accounts/chart-of-accounts" },
          { title: "Account Balances", href: "/reports/accounts/account-balances" },
          { title: "Trial Balance", href: "/reports/accounts/trial-balance" },
          { title: "Journal Report", href: "/reports/accounts/journal-report" },
          { title: "Bank Reconciliation Report", href: "/reports/accounts/bank-reconciliation" },
        ],
      },
      {
        title: "Partner Reports",
        items: [
          { title: "Partner Ledger", href: "/reports/partner/partner-ledger" },
          { title: "Aged Receivable", href: "/reports/partner/aged-receivable" },
          { title: "Aged Payable", href: "/reports/partner/aged-payable" },
        ],
      },
      {
        title: "Management Report",
        items: [
          { title: "Dashboard", href: "/reports/management/dashboard" },
          { title: "Budget Analysis", href: "/reports/management/budget-analysis" },
          { title: "Revised Budget History", href: "/reports/management/revised-budget-history" },
          { title: "Business Performance", href: "/reports/management/business-performance" },
        ],
      },
      {
        title: "Fixed Assets",
        items: [
          { title: "Assets Listing", href: "/reports/fixed-assets/listing" },
          { title: "Assets Transaction History", href: "/reports/fixed-assets/transaction-history" },
          { title: "Assets Movement Report", href: "/reports/fixed-assets/movement-report" },
          { title: "Assets Revaluation Report", href: "/reports/fixed-assets/revaluation-report" },
          { title: "Assets Impairment", href: "/reports/fixed-assets/impairment" },
          { title: "Assets Deposer Report", href: "/reports/fixed-assets/deposer-report" },
          { title: "CAPEX Budget Report", href: "/reports/fixed-assets/capex-budget" },
          { title: "Assets Depreciation Report", href: "/reports/fixed-assets/depreciation-report" },
        ],
      },
      {
        title: "Audits Reports",
        items: [
          { title: "Audit Trail (Transaction Activity)", href: "/reports/audit/transaction-activity" },
          { title: "System Audit Trail (System Activity)", href: "/reports/audit/system-activity" },
        ],
      },
    ],
  },
  bic: {
    title: "BIC",
    items: [
      { title: "Cash Flow Dashboard", href: "/bic/cash-flow" },
      { title: "Business Performance Dashboard", href: "/bic/business-performance" },
      { title: "Receivable Dashboard", href: "/bic/receivable" },
      { title: "Payable Dashboard", href: "/bic/payable" },
    ],
  },
}
