import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ClientListItem({
  id,
  name,
}: {
  id: string
  name: string
}) {
  const router = useRouter()

  const setSelectedClient = () => {
    router.push(`/client/${id}`, { scroll: false })
  }

  return (
    <li className="pb-3 sm:pb-4 flex">
      <button onClick={setSelectedClient}>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <Image
              className="rounded-full"
              width="64"
              height="64"
              src="/img/placeholders/avatar.jpeg"
              alt={`${name} avatar`}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {name}
            </p>
          </div>
        </div>
      </button>
    </li>
  )
}
