import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SalesNavbar() {
  return (
    <nav>
      {/* navbar */}

      <div className="flex items-center justify-end px-4 py-2 bg-white dark:bg-gray-800">
        <div className="hidden md:flex gap-4">
          <Link
            href="#"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
