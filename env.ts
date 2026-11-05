import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  server: {
    LOG_LEVEL: z
      .enum(["trace", "debug", "info", "warn", "error", "fatal"])
      .default("debug"),
    PORT: z.coerce.number().pipe(z.int().min(1).max(65535)).default(3000),
  },
  runtimeEnvStrict: {
    LOG_LEVEL: process.env.LOG_LEVEL,
    PORT: process.env.PORT,
  },
  emptyStringAsUndefined: true,
});
