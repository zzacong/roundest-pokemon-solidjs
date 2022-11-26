import type { Context } from './context'

import { initTRPC } from '@trpc/server'

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape }) {
    return shape
  },
})

export const router = t.router

export const publicProcedure = t.procedure
