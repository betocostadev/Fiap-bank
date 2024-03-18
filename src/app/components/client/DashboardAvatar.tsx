import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DashboardAvatar({
  clientName,
}: {
  clientName: string
}) {
  const router = useRouter()
  const [dropdown, setDropdown] = useState(false)

  const exitBank = () => {
    router.push('/', { scroll: false })
  }

  return (
    <>
      <div className="flex justify-start items-center my-2">
        <button onClick={() => setDropdown(!dropdown)}>
          <Image
            className="rounded-full"
            width="48"
            height="48"
            src="/img/placeholders/avatar.jpeg"
            alt={`avatar`}
          />
        </button>
        <h2 className="text-lg md:text-2xl text-black ml-2 dark:text-white">{`Hello, ${clientName}`}</h2>
      </div>
      {dropdown && (
        <div
          id="dropdown"
          className="z-10 absolute mt-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-500"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button
                className="py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-lg"
                onClick={exitBank}
              >
                ⬅️ Exit
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
