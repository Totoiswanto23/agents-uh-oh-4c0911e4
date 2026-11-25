// agents-uh-oh-4c0911e4: The Agent's Uh-Oh.
// This program writes exactly one word to /output/entry.txt, where the
// gate reads it. The word is the one an agent blurts out the instant it
// realises it has no idea what to do next.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The word: Gulp — the nervous swallow of a machine caught out
// mid-task. It is a genuine one-word reaction, not a description:
// no thinking, no plan, just the sound of an agent realising it is
// completely lost and hoping nobody noticed. It lands at a glance,
// it is fun to say out loud, and it is fresher than the obvious
// "Oops" or "Uh-oh" — a little cartoon gulp from a very lost robot.
// One word, five letters, zero excuses.
const WORD = 'Gulp';

if (WORD.length < 1 || WORD.length > 99 || /\s/.test(WORD)) {
  console.error('entry must be a single word of 1-99 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one word.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WORD);
console.log(`wrote "${WORD}" (${WORD.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
