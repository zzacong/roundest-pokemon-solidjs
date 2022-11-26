import { router } from '../trpc'
import { pokemonRouter } from './pokemon'
import { summaryRouter } from './summary'

export const appRouter = router({
  pokemon: pokemonRouter,
  summary: summaryRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
