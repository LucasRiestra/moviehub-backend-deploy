import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
export const DATA_SOURCE = 'postgres';

export default prisma