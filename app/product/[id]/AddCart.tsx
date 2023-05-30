'use client'
import { useCartStore } from '@/store'
import { AddCartType } from '@/types/AddCartType'

export default function AddCart({
	name,
	id,
	image,
	unit_amount,
	quantity
}: AddCartType) {
	const cartStore = useCartStore()
	return (
		<>
			<button
				onClick={() =>
					cartStore.addProduct({ id, image, unit_amount, quantity, name })
				}
				className="text-white px-4 py-2 font-medium rounded-md bg-teal-700"
			>
				Add to cart
			</button>
		</>
	)
}
