'use client' // This is a client component 👈🏽
// import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-red-600">FIAP Bank</h1>
        <div>
          <span className="text-lg text-black">Account balance</span>
          <span className="text-lg ml-2 font-bold text-black">
            BRL 3,455.92
          </span>
        </div>
      </header>
      <section>
        <h2 className="text-xl mb-4 text-black">Hello, User name</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center space-x-2">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="withdraw"
                >
                  Withdraw
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="withdraw"
                  type="number"
                  placeholder="0"
                />
              </div>

              <button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Withdraw
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center space-x-2">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="deposit"
                >
                  Deposit
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="deposit"
                  type="number"
                  placeholder="0"
                />
              </div>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Deposit
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-2xl mb-4 font-bold">TRANSACTIONS</h3>
          <table className="table-auto w-full text-black">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td># 3461</td>
                <td>Withdraw</td>
                <td className="text-red-500">- 1100</td>
                <td>3900</td>
              </tr>
              <tr>
                <td># 3462</td>
                <td>Deposit</td>
                <td className="text-green-500">+ 100,92</td>
                <td>4000,92</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-8">
        <h3 className="text-2xl mb-4 font-bold">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link href="/clients">Clients</Link>
          </button>
        </h3>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          + Add client
        </button>
      </section>
    </div>
  )
}
