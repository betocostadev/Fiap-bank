'use client' // This is a client component 👈🏽
import { useState } from 'react'
import ClientList from './components/home/ClientList'
import AddClientModal from './components/home/AddClientModal'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <AddClientModal
        showModal={showModal}
        hideModal={() => setShowModal(false)}
      />
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
        <section className="flex flex-col w-1/2 self-center">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Clients</h2>
            <button
              data-modal-target="add-client-modal"
              data-modal-toggle="add-client-modal"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add Client
            </button>
          </div>
          <ClientList />
        </section>
      </div>
    </>
  )
}
