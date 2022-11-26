import { z } from 'zod'

import { getOptionsForVote } from '../../utils'
import { router, publicProcedure } from '../trpc'

export const pokemonRouter = router({
  getPokemonById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const pokemon = await ctx.prisma.pokemon.findFirst({
        where: { id: input.id },
      })
      if (!pokemon) throw new Error(`Pokemon with id (${input.id}) not found`)
      return pokemon
    }),

  getPokemonPair: publicProcedure.query(async ({ ctx }) => {
    const [first, second] = getOptionsForVote()
    const pokemonPair = await ctx.prisma.pokemon.findMany({
      where: { id: { in: [first, second] } },
    })
    if (pokemonPair.length !== 2) throw new Error('Failed to find two pokemon')
    return { firstPokemon: pokemonPair[0], secondPokemon: pokemonPair[1] }
  }),

  castVote: publicProcedure
    .input(
      z.object({
        votedFor: z.number(),
        votedAgainst: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const voteInDb = await ctx.prisma.vote.create({
        data: {
          votedAgainstId: input.votedAgainst,
          votedForId: input.votedFor,
        },
      })
      return { success: true, vote: voteInDb }
    }),
})
