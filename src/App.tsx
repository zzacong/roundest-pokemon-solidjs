import { Route, Routes } from 'solid-app-router'
import { lazy } from 'solid-js'
import { Footer, Header } from './components'
import { SummaryData } from './pages/summary.data'

const HomePage = lazy(() => import('./pages'))
const SummaryPage = lazy(() => import('./pages/summary'))

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/summary" element={<SummaryPage />} data={SummaryData} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}
