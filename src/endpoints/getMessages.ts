import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getMessages = async () => {
  return prisma.message.findMany()
};

export const getMessagesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return getMessages();
};