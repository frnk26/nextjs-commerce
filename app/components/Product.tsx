import formatPrice from '@/util/PriceFormats'
import Image from 'next/image'
export default function Product({
  name,
  image,
  price
}: {
  name: string
  image: string
  price: number | null
}) {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={40} />
      <h1>{name}</h1>
      <h2>{price !== null ? formatPrice(price) : 'N/A'}</h2>
    </div>
  )
}
