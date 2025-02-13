export const CRM_ROUTES = {
    quickView: {
      title: 'Quick View',
      items: [
        { title: 'Incident History', href: '/dashboard/quick-view/incident-history' },
      ],
    },
    configuration: {
      title: 'Configuration',
      items: [
        { title: 'Incident Type Group', href: '/dashboard/configuration/incident-type-group' },
        { title: 'Incident Type', href: '/dashboard/configuration/incident-type' },
        { title: 'Work Flow', href: '/dashboard/configuration/work-flow' },
        { title: 'Work Flow Steps', href: '/dashboard/configuration/work-flow-steps' },
        { title: 'Rejection Reason', href: '/dashboard/configuration/rejection-reason' },
        { title: 'Escalation Groups', href: '/dashboard/configuration/escalation-groups' },
        { title: 'Document List', href: '/dashboard/configuration/document-list' },
        { title: 'Priority', href: '/dashboard/configuration/priority' },
      ],
    },
    operations: {
      title: 'Operations',
      items: [
        { title: 'New Incident', href: '/dashboard/operations/new-incident' },
        { title: 'Archive Incidents', href: '/dashboard/operations/archive-incidents' },
      ],
    },
    reports: {
      title: 'Reports',
      items: [
        { title: 'User Incident Analysis', href: '/dashboard/reports/user-incident-analysis' },
        { title: 'Escalation Groups', href: '/dashboard/reports/escalation-groups' },
        { title: 'Incident', href: '/dashboard/reports/incident' },
        { title: 'Incident Escalations', href: '/dashboard/reports/incident-escalations' },
        { title: 'Incident Listing', href: '/dashboard/reports/incident-listing' },
        { title: 'Incident Log', href: '/dashboard/reports/incident-log' },
        { title: 'Incident Time Analysis', href: '/dashboard/reports/incident-time-analysis' },
        { title: 'Workflow Listing', href: '/dashboard/reports/workflow-listing' },
      ],
    },
  };
  