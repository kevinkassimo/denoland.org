# Dino

Modules and wrapper for Deno. In-progress work, syncing with Deno. Only provides async API.    
Available at [https://denoland.org/dino.ts](https://denoland.org/dino.ts).

## API
### fs
```ts
readFile(path: string, enctype: string|null = 'utf8'): Promise<string|Uint8Array>;
writeFile(path: string, data: string|Uint8Array, perm = 0o666, enctype: string|null = 'utf8'): Promise<void>;
stat(filename: string): Promise<deno.FileInfo>;
linkStat(filename: string): Promise<deno.FileInfo>;
rename(oldpath: string, newpath: string): Promise<void>;
remove(path: string): Promise<void>;
removeAll(path: string): Promise<void>
makeDir(path: string, mode = 0o777): Promise<void>;
makeTempDirSync(options: deno.MakeTempDirOptions = {}): string;
```
### os
```ts
exit(exitCode = 0): never;
sleep(ms: number): Promise<void>;
env(): { [index: string]: string };
```

## Example
```ts
import {fs} from 'https://denoland.org/dino.ts';

fs.writeFile('test.txt', 'Hello world');
```