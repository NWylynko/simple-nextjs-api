import { FastifyRequest, FastifyReply } from "fastify";

export const getMessages = async () => {
  return { hello: "world" };
};

export const getMessagesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return getMessages();
};