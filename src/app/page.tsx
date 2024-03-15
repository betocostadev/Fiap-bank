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
      <div className="flex flex-col min-h-screen p-8">
        <section className="flex flex-col w-1/2 self-center">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Clients</h2>
            <button
              data-modal-target="add-client-modal"
              data-modal-toggle="add-client-modal"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
