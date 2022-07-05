import { createRouter } from './context'
import { pokemonRouter } from './pokemon'
import { summaryRouter } from './summary'

export const appRouter = createRouter()
  .merge(pokemonRouter)
  .merge(summaryRouter)

// export type definition of API
export type AppRouter = typeof appRouter
