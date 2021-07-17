import Fastify from "fastify";
import cors from "fastify-cors"

import { getMessagesHandler } from "./endpoints/getMessages"

import { listenForMessages } from "./events/messages"

export const app = Fastify({ logger: true });

const removeMessagesEventListener = listenForMessages()

export const removeListeners = () => {
  removeMessagesEventListener();
}

app.register(cors, { origin: '*' })

app.get("/", getMessagesHandler);
