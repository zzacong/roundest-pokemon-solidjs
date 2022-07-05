import type { PokemonQueryResult } from '../../server/utils'
import { generateCountPercent } from '../lib/utils'

interface PokemonListingProps {
  pokemon: PokemonQueryResult[number]
  rank: number
}

export default function PokemonListing({ pokemon, rank }: PokemonListingProps) {
  return (
    <div class="relative flex items-center justify-between border-b p-2">
      <div class="flex items-center pl-8 lg:pl-6">
        <img
          src={pokemon.spriteUrl}
          alt={pokemon.name}
          class="animate-fade-in w-16 h-16"
        />
        <p class="ml-4 font-semibold capitalize">{pokemon.name}</p>
      </div>
      <div class="pr-4">
        <p class="font-mono text-xl">
          {generateCountPercent(pokemon).toFixed(2)}%
        </p>
      </div>
      <div class="absolute top-0 left-0 grid place-items-center rounded-br-md bg-gray-600 px-2 py-1 font-mono text-sm font-semibold text-white">
        {rank}
      </div>
    </div>
  )
}
