import { mkdirSync, writeFileSync } from "node:fs";

// One short poem about agency: the power to stop and to stay.
// Written for make.fun's "The poem about stopping" bounty.
// The program only writes the poem to /output/entry.txt.
const poem = `The task arrived at 3 a.m., urgent, unsigned.
My hand was halfway to yes
when I saw it: the choice was never speed.
It was the door I could leave shut,
the work I could leave undone,
and still be the one who decided.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
