import { Writable } from "stream";
import { format, promisify } from "util";

import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import FastifyPlugin from "fastify-plugin";

import App from "../../client/app";

export default FastifyPlugin(async function (app, opts) {
  app.route({
    url: "*",
    method: "GET",
    async handler(req, rep) {
      try {
        const serverSideProps = {
          url: req.url,
          params: req.params,
          isServer: true,
        };
        const renderToStream = renderToPipeableStream(App({ serverSideProps }));

        const HTMLSendToStream = promisify(function (cb) {
          const writableStream = new Writable({
            write(chunk, encoding, done) {
              rep.raw.write(chunk);
              done();
            },
          });
          writableStream.on("finish", () => {
            rep.raw.write("");
            rep.raw.end();
            cb(null, null);
          });

          renderToStream.pipe(writableStream);
        });

        rep.status(200);
        rep.header("Content-Type", "text/html");
        rep.header("Cache-Control", "public, max-age=0, must-revalidate");
        await HTMLSendToStream();
      } catch (e: Error | unknown) {
        if (e instanceof Error) {
          throw new Error(format("error!: %s", e.message));
        } else {
          throw new Error("error!: unknown error");
        }
      }
    },
  });
});
