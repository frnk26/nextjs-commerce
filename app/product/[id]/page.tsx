import { SearchParamTypes } from '@/types/SearchParams'
import formatPrice from '@/util/PriceFormats'
import Image from 'next/image'
import AddCart from './AddCart'

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={600}
        height={600}
      />

      <div>
        <h1 className="text-2xl font-medium py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
        <div className="">
          <p>
            {searchParams.unit_amount !== null
              ? formatPrice(searchParams.unit_amount)
              : 'N/A'}
          </p>
          {/* add to cart button cline side */}
          <AddCart {...searchParams} />
        </div>
      </div>
    </div>
  )
}
