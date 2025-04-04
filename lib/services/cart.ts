import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCart = async (pk_fk_email: string) =>
  await prisma.cart.findMany({ where: { pk_fk_email } });
