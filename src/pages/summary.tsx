import type { SummaryData } from './summary.data'
import { For, Show } from 'solid-js'
import { useRouteData } from 'solid-app-router'
import { LoadingSpinner, PokemonRanking } from '../components'

const pageTitle = 'Summary | Roundest Pokémon'

export default function SummaryPage() {
  const pokemon = useRouteData<ReturnType<typeof SummaryData>>()

  return (
    <>
      <title>{pageTitle}</title>

      <div class="mb-8 flex flex-col pt-16">
        <h1 class="mb-8 text-center text-2xl font-bold lg:text-4xl">Summary</h1>

        <h3 class="mb-16 text-center text-xl">
          Total pokemon:{' '}
          <span class="font-mono font-bold">{pokemon()?.length}</span>
        </h3>

        <Show
          when={!pokemon.loading && pokemon()}
          fallback={<LoadingSpinner />}
        >
          {data => (
            <div class="mx-auto w-full max-w-2xl border">
              <For each={data}>
                {(p, i) => <PokemonRanking pokemon={p} rank={i() + 1} />}
              </For>
            </div>
          )}
        </Show>
      </div>
    </>
  )
}
