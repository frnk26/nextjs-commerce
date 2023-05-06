type Params = {
  id: string
}

type SearchParams = {
  name: string
  image: string
  id: string
  unit_amount: number | null
  description: string | null
}

export type SearchParamTypes = {
  params: Params
  searchParams: SearchParams
}
