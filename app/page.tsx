import Image from 'next/image'
import Stripe from 'stripe'
import Product from './components/Product'
// fetching products
const getProducts = async () => {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
		apiVersion: '2022-11-15'
	})
	const products = await stripe.products.list()
	const porductWithPRices = await Promise.all(
		products.data.map(async product => {
			const prices = await stripe.prices.list({ product: product.id })
			return {
				id: product.id,
				name: product.name,
				unit_amount: prices.data[0].unit_amount,
				image: product.images[0],
				currency: prices.data[0].currency,
				description: product.description
			}
		})
	)
	return porductWithPRices
}
// end of fetching products
export default async function Home() {
	const products = await getProducts()
	return (
		<div className="grid grid-cols-fluid gap-4">
			{products.map(product => (
				<Product key={product.id} {...product} />
			))}
		</div>
	)
}
