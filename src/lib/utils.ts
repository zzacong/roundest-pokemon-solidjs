import type { PokemonQueryResult } from '../../server/router/summary'

export const generateCountPercent = (pokemon: PokemonQueryResult[number]) => {
  const { voteFor, voteAgainst } = pokemon._count
  const total = voteFor + voteAgainst
  if (total === 0) return 0
  return (voteFor / total) * 100
}
