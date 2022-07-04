import { createTrpcQuery } from './lib/trpc'

export default function App() {
  const [pair, { refetch }] = createTrpcQuery('get-pokemon-pair')

  return (
    <div class="text-center">
      <header class="flex flex-col min-h-screen justify-center items-center px-10">
        <h1 class="text-5xl font-extrabold">Hello Solid.js</h1>
        <code class="break-all font-mono">{JSON.stringify(pair())}</code>
      </header>
    </div>
  )
}
