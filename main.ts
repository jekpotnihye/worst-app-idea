import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching the worst app imaginable, in criterion order:
// a specific named app and its useless function first, absurd logic and
// deadpan confidence next, a real-pitch sound, one clean sentence, and a
// vivid picture that lands on the final words.
const entry =
  "Loopr is a $9.99-a-month app that reminds your goldfish of its birthday " +
  "by sending a push notification it cannot read to a phone it does not own.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the entry, 145 chars.
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
