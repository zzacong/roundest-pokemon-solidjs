import { Match, Show, Switch } from 'solid-js'
import { LoadingSpinner, PokemonVoting } from './components'
import { createTrpcMutation, createTrpcQuery } from './lib/trpc'

export default function App() {
  const [pair, { refetch }] = createTrpcQuery('get-pokemon-pair')
  const [data] = createTrpcQuery('get-summary')
  const { mutate } = createTrpcMutation('cast-vote')

  const voteForRoundest = (selected: number, against: number) => () => {
    mutate({ votedFor: selected, votedAgainst: against })
    refetch()
  }

  return (
    <div class="flex grow flex-col items-center justify-center px-6 pt-16">
      <h1 class="mb-12 text-center text-lg font-bold md:text-2xl lg:mb-20 lg:text-4xl">
        Which Pokemon is Roundest?
      </h1>

      <code>{JSON.stringify(data()?.length)}</code>

      <Switch fallback={<LoadingSpinner />}>
        <Match when={pair.loading}>
          <LoadingSpinner />
        </Match>
        <Match when={!pair.loading && !pair()}>
          <LoadingSpinner message="no pokemon to show" />
        </Match>
        <Match when={pair()}>
          {({ firstPokemon, secondPokemon }) => (
            <div class="flex max-w-2xl flex-col items-center justify-between gap-6 rounded border py-8 px-8 md:flex-row lg:gap-10 lg:px-16">
              <PokemonVoting
                pokemon={firstPokemon}
                vote={voteForRoundest(firstPokemon.id, secondPokemon.id)}
                // disabled={voteMutation.isLoading || isLoading}
              />
              <div class="font-mono text-2xl">VS</div>
              <PokemonVoting
                pokemon={secondPokemon}
                vote={voteForRoundest(secondPokemon.id, firstPokemon.id)}
                // disabled={voteMutation.isLoading || isLoading}
              />
            </div>
          )}
        </Match>
      </Switch>
    </div>
  )
}

// ) : !pair() ? (
//   <LoadingSpinner message="no pokemon to show" />
