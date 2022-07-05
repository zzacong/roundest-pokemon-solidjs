import type { PrismaClient } from '@prisma/client'
import type { inferAsyncReturnType } from '@trpc/server'
import { generateCountPercent } from '../../src/lib/utils'

export const getPokemonInOrder = async (prisma: PrismaClient) => {
  const allPokemon = await prisma.pokemon.findMany({
    include: {
      _count: {
        select: {
          voteFor: true,
          voteAgainst: true,
        },
      },
    },
  })
  allPokemon.sort((a, b) => {
    const difference = generateCountPercent(b) - generateCountPercent(a)
    if (difference === 0) return b._count.voteFor - a._count.voteFor
    return difference
  })
  return allPokemon
}

export type PokemonQueryResult = inferAsyncReturnType<typeof getPokemonInOrder>
