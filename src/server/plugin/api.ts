import { format } from "util";
import type { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async function apiRouter(
  app: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> {
  app.get("/", async function (req, rep) {
    try {
      rep.send("test");
    } catch (e: Error | unknown) {
      errorHandler(e);
    }
  });
}

function errorHandler(e: Error | unknown): Error {
  if (e instanceof Error) {
    throw new Error(format("error!: %s", e.message));
  } else {
    throw new Error("error!: unknown error");
  }
}
