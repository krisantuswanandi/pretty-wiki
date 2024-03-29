# Wikipedia Reading Mode

Read Wikipedia like you mean it.

## Installation

[Install on Greasyfork](https://greasyfork.org/en/scripts/491169-wikipedia-reading-mode)

or install manually:

1. Install [Violentmonkey](https://violentmonkey.github.io/) browser extension.
2. Create a new script and paste the content of `dist/script.js` into it.
3. Refresh Wikipedia and enjoy!

## Development

- Install [bun](https://bun.sh/) if you haven't `brew install oven-sh/bun/bun`.
- Install dependencies if any `bun install`.
- Run `bun run dev` to start the development server.
- Open Violentmonkey and choose `Install from URL`.
- Enter `http://localhost:3000/script.user.js`.
- Toggle on `Track external edits` and keep the page open to enable auto updates.
