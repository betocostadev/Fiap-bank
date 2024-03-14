'use client'
import Dashboard from '@/app/components/client/dashboard'
import { ClientsProvider } from '@/providers/clients'

export default function Client({ params }: { params: { id: string } }) {
  console.log('Client page: ', params)

  return (
    <ClientsProvider>
      <div className="flex flex-col bg-gray-100 min-h-screen px-8 py-2 m-0">
        <main>
          <Dashboard userId={params.id} />
        </main>
      </div>
    </ClientsProvider>
  )
}
