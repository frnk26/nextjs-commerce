import formatPrice from '@/util/PriceFormats'
import Image from 'next/image'
import Link from 'next/link'
export default function Product({
  name,
  image,
  unit_amount,
  id,
  description
}: {
  name: string
  image: string
  unit_amount: number | null
  id: string
  quantity: number | 1
  description: string | null
}) {
  return (
    <Link
      //  link that fetch data product in descrition page
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description }
      }}
    >
      {/* end link that fetch data product in descrition page */}
      <div>
        <Image
          className="object-cover aspect-square "
          src={image}
          alt={name}
          width={400}
          height={400}
        />
        <div>
          <h1>{name}</h1>
          <h2 className="text-teal-500">
            {unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}
          </h2>
        </div>
      </div>
    </Link>
  )
}
