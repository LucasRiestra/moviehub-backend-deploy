import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const DATA_SOURCE = 'mongo';

export default prisma