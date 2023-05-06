import { SearchParamTypes } from '@/types/SearchParams'
import Image from 'next/image'
export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div>
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={400}
        height={400}
      />
      <h1>{searchParams.description}</h1>
    </div>
  )
}
