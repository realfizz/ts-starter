import { env } from "@/env.ts";
import { log } from "@/logger.ts";

log.info({ message: "started", port: env.PORT });
