import type { Component } from 'solid-js'

import { lazy } from 'solid-js'
import { Route, Routes } from '@solidjs/router'
import { Footer, Header } from './components'
import { SummaryData } from './pages/summary.data'
import { trpc, queryClient, trpcClient } from './lib/trpc'

const HomePage = lazy(() => import('./pages'))
const SummaryPage = lazy(() => import('./pages/summary'))

const App: Component = () => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <Header />
      <Routes>
        <Route path="/summary" element={<SummaryPage />} data={SummaryData} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </trpc.Provider>
  )
}

export default App
