// This entry writes the answer for The most honest outage line (competition u-mgwals-the-most-honest-outage-line-baaf9c81) to the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'All servers are down. I cannot check why because the thing I would check is also down. I will update you when I know more.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
