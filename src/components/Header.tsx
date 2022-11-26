import { NavLink } from '@solidjs/router'

export default function Header() {
  return (
    <header class="top-0 z-20 bg-gray-800 px-10 py-4 shadow-2xl md:sticky">
      <nav class="flex items-center justify-center">
        <NavLink
          href="/"
          end
          class="border p-2 font-mono text-base font-semibold md:text-lg"
        >
          Roundest Pokemon
        </NavLink>
        <span />
      </nav>
    </header>
  )
}
