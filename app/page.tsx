import { Inter } from 'next/font/google'
import Image from 'next/image'
import Stripe from 'stripe'
import Product from './components/Product'

const inter = Inter({ subsets: ['latin'] })
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
        price: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency
      }
    })
  )
  return porductWithPRices
}

export default async function Home() {
  const products = await getProducts()
  console.log(products)
  return (
    <div>
      <h1 className=" text-violet-600 text-5xl">Next js 🔥🔥🔥 </h1>
      {products.map(product => (
        <Product {...product} />
      ))}
    </div>
  )
}
