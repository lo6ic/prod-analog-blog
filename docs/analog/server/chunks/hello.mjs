import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const hello = defineEventHandler(() => ({ message: "Hello World" }));

export { hello as default };
//# sourceMappingURL=hello.mjs.map
