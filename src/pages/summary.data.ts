import { createTrpcQuery } from '../lib/trpc'

export function SummaryData() {
  const [pokemon] = createTrpcQuery('get-summary')
  return pokemon
}
