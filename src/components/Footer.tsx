import { NavLink } from '@solidjs/router'

export default function Footer() {
  return (
    <footer class="py-6">
      <nav class="mt-10 flex items-center justify-center gap-8 font-mono">
        <a
          href="https://github.com/zzacong/roundest-pokemon-solidjs"
          target="_blank"
          rel="noopener noreferrer"
          class="text-base font-semibold hover:underline hover:opacity-80"
        >
          Source code
        </a>
        <span>|</span>
        <NavLink
          end
          href="/summary"
          class="text-base font-semibold hover:underline hover:opacity-80"
        >
          View summary
        </NavLink>
      </nav>
    </footer>
  )
}
