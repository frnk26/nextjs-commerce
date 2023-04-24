'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
export default function Nav({ user }: Session) {
  return (
    <nav className="flex justify-between items-center py-8">
      <h3>Cummerce</h3>
      <ul className="flex items-center gap-6">
        {!user && (
          <li className="bg-teal-500 rounded-md py-2 px-4">
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
        {user && (
          <li>
            <Image
              src={user?.image as string}
              alt={user.name as string}
              width={48}
              height={48}
              className="rounded-full"
            />
          </li>
        )}
      </ul>
    </nav>
  )
}
