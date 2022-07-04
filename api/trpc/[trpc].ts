import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { inferAsyncReturnType } from '@trpc/server'

type RouterContext = inferAsyncReturnType<typeof createContext>

const appRouter = trpc.router<RouterContext>()

// export type definition of API
export type AppRouter = typeof appRouter

const createContext = (opts: trpcNext.CreateNextContextOptions) => opts

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext as any,
})
