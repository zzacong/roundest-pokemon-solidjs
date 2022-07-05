import { Route, Routes } from 'solid-app-router'
import { lazy } from 'solid-js'
import { Footer, Header } from './components'

const HomePage = lazy(() => import('./pages'))
const SummaryPage = lazy(() => import('./pages/summary'))

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}
