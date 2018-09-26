import * as deno from "deno";
import * as errors from "https://denoland.org/dino/lib/errors.ts";

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
      throw new errors.NotImplementedError(
        'enctype other than utf8 has not yet been implemented');
    }
    const encoder = new TextEncoder();
    encData = encoder.encode(data);
  }
  await deno.writeFile(path, encData, perm);
}
