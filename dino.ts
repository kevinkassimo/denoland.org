import * as deno from 'deno';

namespace errorsNs {
  export class NotImplementedError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "NotImplementedError";
    }
  }
}

namespace fsNs {
  export async function readFile(
    path: string,
    enctype: string|null = 'utf8'
  ): Promise<string|Uint8Array> {
    const data = await deno.readFile(path);
    if (enctype === null) {
      return data;
    }
    const decoder = new TextDecoder(<string>enctype);
    return decoder.decode(data);
  }

  export async function writeFile(
    path: string,
    data: string|Uint8Array,
    perm = 0o666,
    enctype: string|null = 'utf8'
  ): Promise<void> {
    let encData;
    if (data instanceof Uint8Array ||
      enctype === null) {
      encData = data;
    } else {
      if (enctype && enctype.toLowerCase() !== 'utf8') {
        throw new errorsNs.NotImplementedError(
          'enctype other than utf8 has not yet been implemented');
      }
      const encoder = new TextEncoder();
      encData = encoder.encode(data);
    }
    await deno.writeFile(path, encData, perm);
  }
}

namespace osNs {
  export async function sleep(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const fs = {
  readFile: fsNs.readFile,
  writeFile: fsNs.writeFile,
  stat: deno.stat,
  linkStat: deno.lstat,
  rename: deno.rename,
  remove: deno.remove,
  removeAll: deno.removeAll,
  makeDir: deno.mkdir,
  makeTempDir: deno.makeTempDir,
};

export const os = {
  env: deno.env,
  exit: deno.exit,
  sleep: osNs.sleep,
};

