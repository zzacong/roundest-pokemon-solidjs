import type { inferAsyncReturnType } from '@trpc/server'
import { getPokemonInOrder } from '../utils'
import { createRouter } from './context'

// this is cached
export const summaryRouter = createRouter().query('get-summary', {
  async resolve({ ctx }) {
    const pokemonOrdered = await getPokemonInOrder(ctx.prisma)
    return pokemonOrdered
  },
})

export type PokemonQueryResult = inferAsyncReturnType<typeof getPokemonInOrder>
