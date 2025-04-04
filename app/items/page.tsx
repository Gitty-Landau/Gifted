import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getItems } from "@/lib/services/items";
import Image from "next/image";

const ItemsPage = async () => {
  const items = await getItems();

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, i) => (
        <Card key={i} className="h-72 flex flex-col gap-4">
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <div className="grow mx-10 relative">
            <Image
              src={item.fk_image}
              alt={`${item.name}_image`}
              className="rounded-md"
              fill
            />
          </div>
          <CardFooter>
            <Button className="m-auto">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ItemsPage;
