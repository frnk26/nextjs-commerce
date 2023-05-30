'use client'

import { useCartStore } from '@/store'
import formatPrice from '@/util/PriceFormats'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5'

export default function Cart() {
	const cartStore = useCartStore()
	return (
		<div
			onClick={() => cartStore.toggleCart()}
			className="md:fixed md:w-full md:h-screen md:left-0 md:top-0 md:bg-black/25"
		>
			<div
				onClick={e => e.stopPropagation()}
				className="bg-white absolute right-0 top-0 w-full h-screen overflow-y-scroll text-gray-700 p-7 md:w-1/4"
			>
				<div className="flex justify-between mb-4">
					<h3>Shopping List 📃</h3>
					<div onClick={() => cartStore.toggleCart()}>
						<AiOutlineClose className="cursor-pointer font-black text-2xl text-teal-700" />
					</div>
				</div>
				{cartStore.cart.map(item => (
					<div className="flex py-4 gap-4">
						<Image
							className="rounded-md"
							src={item.image}
							alt={''}
							width={120}
							height={120}
						/>
						<div>
							<h2>{item.name}</h2>
							<div className="flex gap-2">
								<h2>Quantity: {item.quantity}</h2>
								<button
									onClick={() =>
										cartStore.removeProduct({
											id: item.id,
											quantity: item.quantity,
											unit_amount: item.unit_amount,
											image: item.image,
											name: item.name
										})
									}
								>
									<IoRemoveCircle />
								</button>
								<button
									onClick={() =>
										cartStore.addProduct({
											id: item.id,
											quantity: item.quantity,
											unit_amount: item.unit_amount,
											image: item.image,
											name: item.name
										})
									}
								>
									<IoAddCircle />
								</button>
							</div>
							<p>price: {item.unit_amount && formatPrice(item.unit_amount)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
