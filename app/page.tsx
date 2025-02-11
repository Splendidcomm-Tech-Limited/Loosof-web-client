import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js</a>
      </h1>

      <Button>
        <Link href="dashboard/accounting/">Go to dashboard</Link>
      </Button>
    </>
  )
}
