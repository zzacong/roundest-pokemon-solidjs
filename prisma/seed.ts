import { PokemonClient } from 'pokenode-ts'

import { MAX_DEX_ID } from '../src/lib/constants'
import { prisma } from '../server/db/prisma'

const doBackfill = async () => {
  const pokeApi = new PokemonClient()

  const allPokemon = await pokeApi.listPokemons(0, MAX_DEX_ID)

  const formattedPokemon = allPokemon.results.map((p, index) => ({
    id: index + 1,
    name: p.name,
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }))

  const creation = await prisma.pokemon.createMany({
    data: formattedPokemon,
  })

  console.log('Creation?', creation)
}

doBackfill().catch(console.error)
