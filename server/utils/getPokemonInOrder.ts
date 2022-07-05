import type { PrismaClient } from '@prisma/client'
import type { inferAsyncReturnType } from '@trpc/server'

export const getPokemon = (prisma: PrismaClient) =>
  prisma.pokemon.findMany({
    include: {
      _count: {
        select: {
          voteFor: true,
          voteAgainst: true,
        },
      },
    },
  })

export type PokemonQueryResult = inferAsyncReturnType<typeof getPokemon>
