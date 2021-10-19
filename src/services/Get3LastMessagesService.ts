import prismaClient from '../prisma';

class Get3LastMessagesService {
  async excute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true
      }
    })

    return messages;
  }
}

export { Get3LastMessagesService }