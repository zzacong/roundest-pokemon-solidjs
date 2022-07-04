/* @refresh reload */
import { render } from 'solid-js/web'

import './styles/index.css'
import App from './App'
import { Footer, Header } from './components'

render(
  () => (
    <>
      <Header />
      <App />
      <Footer />
    </>
  ),
  document.getElementById('root') as HTMLElement
)
