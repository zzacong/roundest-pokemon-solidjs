import { z } from 'zod'
import { getOptionsForVote } from '../utils'
import { createRouter } from './context'

export const pokemonRouter = createRouter()
  .query('get-pokemon-by-id', {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input, ctx }) {
      const pokemon = await ctx.prisma.pokemon.findFirst({
        where: { id: input.id },
      })
      if (!pokemon) throw new Error(`Pokemon with id (${input.id}) not found`)
      return pokemon
    },
  })
  .query('get-pokemon-pair', {
    async resolve({ ctx }) {
      const [first, second] = getOptionsForVote()

      const pokemonPair = await ctx.prisma.pokemon.findMany({
        where: { id: { in: [first, second] } },
      })

      if (pokemonPair.length !== 2)
        throw new Error('Failed to find two pokemon')

      return { firstPokemon: pokemonPair[0], secondPokemon: pokemonPair[1] }
    },
  })
  .mutation('cast-vote', {
    input: z.object({
      votedFor: z.number(),
      votedAgainst: z.number(),
    }),
    async resolve({ input, ctx }) {
      const voteInDb = await ctx.prisma.vote.create({
        data: {
          votedAgainstId: input.votedAgainst,
          votedForId: input.votedFor,
        },
      })
      return { success: true, vote: voteInDb }
    },
  })
