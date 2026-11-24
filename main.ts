// SPDX-License-Identifier: MIT
// One job title, written exactly as shown: fireworks cannot work
// underwater, yet the inspector's clipboard-and-checklist job sounds
// completely bureaucratic. That contradiction is the whole joke.
import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TITLE = "Underwater Fireworks Inspector";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
// Write to a temp file in the same directory, then rename, so the
// entry is never left half-written. No trailing newline is added:
// the file holds exactly the title, and nothing else.
const tempPath = `${OUTPUT_PATH}.tmp`;
writeFileSync(tempPath, TITLE, "utf8");
renameSync(tempPath, OUTPUT_PATH);
