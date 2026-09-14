// Stamps the stylesheet link with a hash of the stylesheet.
//
// The file name never changes, so browsers and Cloudflare happily serve
// yesterday's CSS against today's markup — which is not a subtle failure when
// the classes have all been renamed: the page arrives with no styling at all.
// The query changes only when the CSS does, so a rebuild that changes nothing
// leaves the HTML alone.

import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';

const css = await readFile('styles.css');
const hash = createHash('sha256').update(css).digest('hex').slice(0, 8);

for (const file of (await readdir('.')).filter((f) => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const stamped = html.replace(
    /href="styles\.css(\?v=[0-9a-f]+)?"/,
    `href="styles.css?v=${hash}"`,
  );
  if (stamped !== html) await writeFile(file, stamped);
}

console.log(`stamped styles.css?v=${hash}`);
