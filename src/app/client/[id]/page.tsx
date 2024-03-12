import Dashboard from '@/app/components/client/dashboard'

export default function Client({ params }: { params: { id: string } }) {
  console.log('Client page: ', params)
  console.log(params.id)
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-red-600">FIAP Bank</h1>
        <div>
          <span className="text-lg text-black">Account balance</span>
          <span className="text-lg ml-2 font-bold text-black">
            BRL 3,455.92
          </span>
        </div>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  )
}
