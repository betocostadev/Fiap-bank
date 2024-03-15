'use client' // This is a client component 👈🏽
import React, { useState } from 'react'
import ClientsContext from '@/contexts/clients'

type Client = { name: string; id: string }

export function ClientsProvider({ children }: { children: React.ReactNode }) {
  const [clients, setClients] = useState([] as Client[])

  return (
    <ClientsContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientsContext.Provider>
  )
}
