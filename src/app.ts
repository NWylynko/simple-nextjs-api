import Fastify from "fastify";
import cors from "fastify-cors"

import { getMessagesHandler } from "./endpoints/getMessages"

export const app = Fastify({ logger: true });

app.register(cors, { origin: '*' })

app.get("/", getMessagesHandler);
