import { PrismaClient } from "@prisma/client";
import { getImageByPath } from "./images";

const prisma = new PrismaClient();

export const getItems = async () => {
  const items = await prisma.items.findMany({});
  return items.map((item) => ({
    ...item,
    fk_image: getImageByPath(item.fk_image),
  }));
};
