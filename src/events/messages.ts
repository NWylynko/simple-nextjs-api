import { PubSub } from '@google-cloud/pubsub';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const subscriptionName = 'simple-web-app-sub';

const pubSubClient = new PubSub();

interface Message {
  message: string;
}

export function listenForMessages() {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionName);

  // Create an event handler to handle messages
  let messageCount = 0;
  
  const messageHandler = async (event: any) => {
    console.log(`Received message ${event.id}:`);
    const timestamp = new Date()
    const { message }: Message = event.data
    await prisma.message.create({ data: { timestamp, message } })
    console.log(`\tData: ${event.data}`);
    console.log(`\tAttributes: ${event.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    event.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  return () => subscription.removeListener('message', messageHandler);

}
