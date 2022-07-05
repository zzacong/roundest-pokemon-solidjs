import type { SummaryData } from './summary.data'
import { useRouteData } from 'solid-app-router'
import { For } from 'solid-js'
import { PokemonRanking } from '../components'

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

        <div class="mx-auto grid w-full max-w-2xl border">
          <For each={pokemon()}>
            {(p, i) => <PokemonRanking pokemon={p} rank={i() + 1} />}
          </For>
        </div>
      </div>
    </>
  )
}
