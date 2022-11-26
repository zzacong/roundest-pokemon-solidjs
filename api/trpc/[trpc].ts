import { createNextApiHandler } from '@trpc/server/adapters/next'

import { appRouter } from '../../server/trpc/router/_app'
import { createContext } from '../../server/trpc/context'

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  responseMeta({ ctx, paths, type, errors }) {
    // assuming you have all your public routes with the keyword `public` in them
    const allPublic = paths && paths.every(path => path.includes('summary'))
    // checking that no procedures errored
    const allOk = errors.length === 0
    // checking we're doing a query request
    const isQuery = type === 'query'

    if (ctx?.res && allPublic && allOk && isQuery) {
      // cache request for 1 day
      const ONE_MINUTE = 60
      return {
        headers: {
          'cache-control': `s-maxage=${ONE_MINUTE}, stale-while-revalidate=${ONE_MINUTE}`,
        },
      }
    }
    return {}
  },
})
