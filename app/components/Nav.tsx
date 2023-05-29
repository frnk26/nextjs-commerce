'use client'

import { useCartStore } from '@/store'
import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiFillShopping } from 'react-icons/ai'
import Cart from './Cart'
export default function Nav({ user }: Session) {
	const cartStore = useCartStore()
	// hydration
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])
	// end of hydration

	return (
		<nav className="flex justify-between items-center py-8">
			<Link href={'/'}>Cummerce</Link>
			<ul className="flex items-center gap-6">
				<li
					onClick={() => cartStore.toggleCart()}
					className="flex items-center text-3xl relative cursor-pointer"
				>
					<AiFillShopping />
					<span className="bg-teal-700 text-white text-sm font-bold rounded-full w-5 h-5 absolute left-4 bottom-4 flex items-center justify-center">
						{isMounted && cartStore.cart.length}
					</span>
				</li>
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
							width={36}
							height={36}
							className="rounded-full"
						/>
					</li>
				)}
			</ul>
			{isMounted && cartStore.isOpen && <Cart />}
		</nav>
	)
}
