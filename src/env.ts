import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  runtimeEnvStrict: {
    LOG_LEVEL: process.env["LOG_LEVEL"],
    PORT: process.env["PORT"],
  },
  server: {
    LOG_LEVEL: z
      .enum(["trace", "debug", "info", "warn", "error", "fatal"])
      .default("debug"),
    PORT: z.coerce.number().pipe(z.int().min(1).max(65_535)).default(3000),
  },
});
