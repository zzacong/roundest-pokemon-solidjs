import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { prisma } from '../db/prisma'

export const createContext = (opts: trpcNext.CreateNextContextOptions) => {
  return {
    ...opts,
    prisma,
  }
}

type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>()
