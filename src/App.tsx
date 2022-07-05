import { Route, Routes } from 'solid-app-router'
import { lazy } from 'solid-js'
import { Footer, Header } from './components'

const VotePage = lazy(() => import('./pages/VotePage'))
const SummaryPage = lazy(() => import('./pages/SummaryPage'))

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/" element={<VotePage />} />
      </Routes>
      <Footer />
    </>
  )
}
