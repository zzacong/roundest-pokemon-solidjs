import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '../../server/trpc/router/_app'

import { createTRPCSolid } from 'solid-trpc'
import { httpBatchLink } from '@trpc/client'
import { QueryClient } from '@tanstack/solid-query'

export const trpc = createTRPCSolid<AppRouter>()

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
})

export const queryClient = new QueryClient()

/**
 * Inference helper for inputs
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>
/**
 * Inference helper for outputs
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>
