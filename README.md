<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/lockup-dark.svg">
    <img src=".github/lockup.svg" alt="Feddy" width="160">
  </picture>
</p>

# Feddy docs

Source for the developer documentation published at https://feddy.app/docs.

- `docs/getting-started` — create a project, set up with an AI agent
- `docs/quickstart` — one page per platform: SwiftUI, UIKit, JavaScript, React, Vue, Svelte, Next.js, Astro, WordPress, Webflow
- `docs/concepts` — projects, conversations, contacts, the assistant, your team
- `docs/guides` — identifying users, unread badges
- `docs/reference` — the full public API of each SDK
- `docs/troubleshooting.mdx`

Pages are MDX published with Mintlify; `docs/docs.json` sets the navigation, and the site is served at `feddy.app/docs`.

Fixes and clarifications are welcome as pull requests.
