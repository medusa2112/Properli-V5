import Fastify from 'fastify';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = Fastify({ logger: true });

app.register(sensible);
app.register(cors, { origin: true });
app.register(jwt, { secret: process.env.JWT_SECRET || 'dev-secret' });

app.get('/health', async () => ({ ok: true }));

app.listen({ port: Number(process.env.PORT || 4000), host: '0.0.0.0' }).then(() => {
  app.log.info('API up');
});
