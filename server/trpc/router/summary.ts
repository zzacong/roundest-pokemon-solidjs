import type { inferAsyncReturnType } from '@trpc/server'

import { getPokemonInOrder } from '../../utils'
import { router, publicProcedure } from '../trpc'

// this is cached
export const summaryRouter = router({
  getSummary: publicProcedure.query(async ({ ctx }) => {
    const pokemonOrdered = await getPokemonInOrder(ctx.prisma)
    return pokemonOrdered
  }),
})

export type PokemonQueryResult = inferAsyncReturnType<typeof getPokemonInOrder>
