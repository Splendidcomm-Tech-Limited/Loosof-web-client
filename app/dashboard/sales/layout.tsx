import SalesNavbar from '@/components/sales/nav-bar'
import React from 'react'

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>



        {/* navbar */}

        <SalesNavbar />

        {children}
    </div>
  )
}
