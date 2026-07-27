import { PrismaClient } from '@prisma/client';

// Singleton per evitare troppe connessioni in dev (hot reload di Next.js).
const globalForPrisma = globalThis;

// Costruito solo se DATABASE_URL è presente: senza questa guardia, `new
// PrismaClient()` lancia subito un errore se la env var manca, e questo modulo
// viene importato (quindi eseguito) da Next.js già in fase di build/collect
// page data, facendo fallire il deploy invece del singolo request a runtime.
export const prisma = globalForPrisma.prisma || (process.env.DATABASE_URL ? new PrismaClient() : null);

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
