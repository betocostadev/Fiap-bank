'use client'
import Dashboard from '@/app/components/client/dashboard'

export default function Client({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen px-8 py-2 m-0 dark:bg-gray-700">
      <main>
        <Dashboard userId={params.id} />
      </main>
    </div>
  )
}
