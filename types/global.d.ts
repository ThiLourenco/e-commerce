import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var prisma: PrismaClient
}
