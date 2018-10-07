import "./deps.ts";
import * as deno from "deno";

deno.writeFileSync("./123.txt", new Uint8Array([]));
