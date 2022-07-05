import type { inferAsyncReturnType } from '@trpc/server'
import { getPokemon } from '../utils'
import { createRouter } from './context'

// this is cached
export const summaryRouter = createRouter().query('get-summary', {
  async resolve({ ctx }) {
    const allPokemon = await getPokemon(ctx.prisma)

    return allPokemon
  },
})

export type PokemonQueryResult = inferAsyncReturnType<typeof getPokemon>
