'use client' // This is a client component 👈🏽
import { useEffect, useState } from 'react'

export default function Clients() {
  const data = useState([])

  const getClients = async (
    url = 'https://api-fiapbank.jeffs.dev:4433/clientes'
  ) => {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      redirect: 'follow',
      referrerPolicy: 'origin',
    })
    console.log(response)
    return response.json()
  }

  useEffect(() => {
    getClients()
  }, [])

  return (
    <div>
      <h3>Clients</h3>
    </div>
  )
}
