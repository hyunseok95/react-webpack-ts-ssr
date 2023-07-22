import * as path from "path";
import { EventEmitter } from "events";

import Fastify from "fastify";
import FastifyCors from "@fastify/cors";
import FastifyStatic from "@fastify/static";

import RenderPlugin from "./plugin/render";
import APIPlugin from "./plugin/api";

class Executor extends EventEmitter {
  constructor() {
    super();
    this.on("start", this.start);
    this.on("error", this.error);
  }

  async start(): Promise<void> {
    try {
      const host = "0.0.0.0";
      const port = 3000;
      const app = Fastify();

      await app.register(FastifyCors, {
        preflightContinue: true,
      });

      await app.register(FastifyStatic, {
        root: path.resolve(__dirname, "..", "..", "dist", "client"),
        prefix: `/static`,
      });

      await app.register(APIPlugin, {
        prefix: "/api",
      });

      await app.register(RenderPlugin);

      await app.ready();
      app.listen({ host, port });
      console.log(`🚀 My Application is listening on http://${host}:${port}`);
    } catch (e) {
      this.emit("error", e);
    }
  }

  async error(err: Error): Promise<void> {
    try {
      this.off("start", this.start);
      this.off("error", this.error);
      throw err;
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  }
}

const executor = new Executor();
executor.emit("start");
