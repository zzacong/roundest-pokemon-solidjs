import { trpc } from '../lib/trpc'

export function SummaryData() {
  const res = trpc.summary.getSummary.useQuery(undefined, {
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
  return res
}
