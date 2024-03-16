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
      <div className="flex flex-col min-h-screen p-8 dark:bg-gray-900">
        <section className="flex flex-col w-full md:w-1/2 self-center">
          <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Clients</h2>
            <button
              data-modal-target="add-client-modal"
              data-modal-toggle="add-client-modal"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-2 border border-blue-500 hover:border-transparent hover:cursor-pointer dark:text-white rounded"
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
