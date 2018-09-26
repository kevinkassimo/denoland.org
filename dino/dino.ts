import * as deno from "deno";
import * as _fs from "https://denoland.org/dino/lib/fs.ts";
import * as _os from "https://denoland.org/dino/lib/os.ts";

export const fs = {
  ..._fs,
  stat: deno.stat,
  linkStat: deno.lstat,
  rename: deno.rename,
  remove: deno.remove,
  removeAll: deno.removeAll,
  makeDir: deno.mkdir,
  makeTempDir: deno.makeTempDir,
  symLink: deno.symlink,
  // readLink: deno.readlink
};

export const os = {
  ..._os,
  env: deno.env,
  exit: deno.exit,
}

export const util = {
  // trace: deno.trace,
}
