import { PrismaClient } from '@prisma/client';

// Singleton per evitare troppe connessioni in dev (hot reload di Next.js).
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
