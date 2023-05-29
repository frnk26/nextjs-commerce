type Params = {
  id: string
}

type SearchParams = {
  name: string
  image: string
  id: string
  unit_amount: number | null
  description: string | null
  quantity: number | 1
}

export type SearchParamTypes = {
  params: Params
  searchParams: SearchParams
}
