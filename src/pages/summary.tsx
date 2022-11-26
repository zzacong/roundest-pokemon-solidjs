import type { SummaryData } from './summary.data'
import { For, Match, Show, Switch } from 'solid-js'
import { useRouteData } from '@solidjs/router'
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
          <span class="font-mono font-bold">{pokemon.data?.length}</span>
        </h3>

        <Switch>
          <Match when={pokemon.isLoading}>
            <LoadingSpinner />
          </Match>

          <Match when={pokemon.isError}>
            <p>Error: {pokemon.error?.message}</p>
          </Match>

          <Match when={pokemon.isSuccess}>
            <div class="mx-auto w-full max-w-2xl border">
              <For each={pokemon.data}>
                {(p, i) => <PokemonRanking pokemon={p} rank={i() + 1} />}
              </For>
            </div>
          </Match>
        </Switch>
      </div>
    </>
  )
}
