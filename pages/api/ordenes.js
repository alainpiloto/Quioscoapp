import { PrismaClient } from '@prisma/client';

export default async function handler(req, resp) {
  const prisma = new PrismaClient();
  if (req.method === 'POST') {
    const orden = await prisma.orden.create({
      data: {

        nombre: req.body.name,
        fecha: req.body.date,
        total: req.body.total,
        pedido: req.body.order,
      },
    });
    resp.json(orden);
  }
}
