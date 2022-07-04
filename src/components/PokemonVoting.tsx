import type { inferQueryResponse } from '../lib/trpc'
import clsx from 'clsx'

type PokemonFromServer = inferQueryResponse<'get-pokemon-by-id'>
interface PokemonVotingProps {
  pokemon: PokemonFromServer
  disabled?: boolean
  vote: () => void
}

export default function PokemonVoting({
  pokemon,
  vote,
  disabled,
}: PokemonVotingProps) {
  return (
    <div
      class={clsx(
        'flex flex-col items-center transition-opacity',
        disabled && 'opacity-0'
      )}
    >
      <button
        onClick={vote}
        class="flex h-40 w-40 flex-col items-center rounded bg-white p-4 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 md:h-52 md:w-52"
      >
        <img
          src={pokemon.spriteUrl}
          alt={pokemon.name}
          class="animate-fade-in w-40 h-40"
        />
        <p class="-mt-3 text-center text-xl capitalize text-slate-700">
          {pokemon.name}
        </p>
      </button>
    </div>
  )
}
