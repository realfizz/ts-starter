import { initLogger } from "evlog";

import { env } from "@/env.ts";

initLogger({
  env: { service: "core-application" },
  minLevel: env.LOG_LEVEL,
});

export { createLogger, log } from "evlog";
